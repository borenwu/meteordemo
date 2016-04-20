import React from 'react';
import {mount} from 'react-mounter'

import SignUp from '../imports/ui/Signup.jsx'
import MainPage from '../imports/ui/Mainpage.jsx'


publicRoutes = FlowRouter.group({
    name: 'publicroute'
});
privateRoutes = FlowRouter.group({
    name: 'privateroute'
});

publicRoutes.route('/', {
    name: 'Home',
    action: function () {
        mount(SignUp)
    }
});
publicRoutes.route('/mainpage', {
    name: 'mainpage',
    action: function () {
        mount(MainPage)
    }
});

publicRoutes.route('/signout', {
    name: 'Signout',
    action: function () {
        Meteor.logout(function () {
            FlowRouter.go('/');
        })
    }
});