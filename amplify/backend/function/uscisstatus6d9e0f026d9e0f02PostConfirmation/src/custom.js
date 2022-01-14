var aws = require('aws-sdk');
var cidp = new aws.CognitoIdentityServiceProvider();

exports.handler = async (event) => {

    if (event.request.userAttributes.sub) {
        let params = {
            'UserPoolId': event.userPoolId,
            'Username': event.userName,
            'GroupName': 'Users'
        }

        try {
            await cidp.adminAddUserToGroup(params).promise()
            console.log("Success")
        } catch (err) {
            console.log("Error", err)
        }

        console.log("Event processed")
    } else {
        console.log("Error: User was not added to Users group")
    }

};