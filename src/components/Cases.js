import React, { useState, useEffect } from "react";

import { listUscisCases } from '../graphql/queries';
import { createUscisCase as createUscisCaseMutation} from '../graphql/mutations';
import { getUscisStatus } from '../graphql/queries';

import { API } from 'aws-amplify';

const initialFormState = { 
    caseid: '', 
    casetype: ''
}

const initialHistory = {
    caseid: '',
    history: ['{"date":"","status":"","description":""}'],
    laststatus: ''
}

function History(props) {

    if (props.history) {
        return (
            <div className="history">
                <div className="entry">
                    <span className="history-title">Case ID:</span> {props.caseid}
                </div>
                <div className="entry">
                    <div className="history-title">Current Status:</div> {props.laststatus}
                </div>
    
                <div className="entry">
                    <div className="history-title">Short History:</div>
     
                    {
                        props.history.map(h => (
                            <div key={JSON.parse(h).date} className="rowGroup">
                                <div className="row">
                                    <div className="cell cell-date">{JSON.parse(h).date.substring(0,10)}</div>
                                    <div className="cell cell-separator">:</div>
                                    <div className="cell cell-status">{JSON.parse(h).status}</div>
                                </div>
                            </div>
                        ))
                    }
    
                </div>
                <div className="entry">
                    <div className="history-title">History:</div>
    
                    {
                        props.history.map(h => (
                            <div key={JSON.parse(h).date} className="entry">
                                <div className="history-entry">
                                    <span className="history-date">{JSON.parse(h).date.substring(0,10)}</span>
                                    <span className="history-status">{JSON.parse(h).status}</span>
                                    <div className="history-description">{JSON.parse(h).description}</div>
                                </div>
                            </div>
                        ))
                    }
                
                </div>
                
            </div>
        )
    } else {
        return (
            <div className="history"></div>
        )
    }


}


function Cases({user}) {

    const [usciscases, setUscisCases] = useState([]);
    const [formData, setFormData] = useState(initialFormState);
    const [history, setHistory] = useState([]);
  
    useEffect(() => {
      fetchUscisCases();
    }, []);
  
    async function fetchUscisCases() {
      const apiData = await API.graphql({query: listUscisCases});
      setUscisCases(apiData.data.listUscisCases.items);
    };
  
    async function createUscisCase() {
      if (!formData.caseid || !formData.casetype) return;
      for (var i=0; i < usciscases.length; i++) {
        if ( formData.caseid == usciscases[i].caseid) {
          setFormData(initialFormState);
          return;
        }
      }
      formData.email = user.attributes.email;
      await API.graphql({query : createUscisCaseMutation, variables : {input: formData}});
      setUscisCases([ ...usciscases, formData]);
      setFormData(initialFormState);
    }

    async function fetchUscisHistory(caseid) {
        const apiData = await API.graphql({query : getUscisStatus, variables : {caseid: caseid}})
        console.log(apiData.data.getUscisStatus);
        setHistory(apiData.data.getUscisStatus);
    }

    {/* My Cases */}
    return (
      <div style={{marginBottom: 10}}>

        <div className="content">
          <div className="table">
            <div className="header">
              <div className="cell-caseid">Case ID</div>
              <div className="cell-casetype">Case Type</div>
              <div className="cell-email">&nbsp;</div>
            </div>

            {
              usciscases.map(usciscase => (
              <div key={usciscase.caseid} className="rowGroup">
                <div  className="row">
                  <div className="cell-caseid" onClick={() => fetchUscisHistory(usciscase.caseid)}>{usciscase.caseid}</div>
                  <div className="cell-casetype">{usciscase.casetype}</div>
                  <div className="cell-email">&nbsp;</div>
               </div>
              </div>
              ))
            }

            <div className="rowGroup">
              <div className="row">
                <div className="cell-caseid">
                  <input 
                  className="cell-caseid"
                  onChange={e => setFormData({ ...formData, 'caseid': e.target.value})}
                  placeholder="(e.g. SRC...)"
                  value={formData.caseid}
                  />
                </div>
                <div className="cell-casetype">
                  <input 
                  className="cell-casetype"
                  onChange={e => setFormData({ ...formData, 'casetype': e.target.value})}
                  placeholder="(e.g. I485)"
                  value={formData.casetype}
                  />
                </div>
                <div className="cell">
                <button onClick={createUscisCase}>Watch Case</button>
                </div>
              </div>
            </div>

          </div>
        </div>
 
        <div>
            <History 
                caseid={history.caseid} 
                history={history.history} 
                laststatus={history.laststatus} 
            />
        </div>
 
      </div>
    );
};



export default Cases;