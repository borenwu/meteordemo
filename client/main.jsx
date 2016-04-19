import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import SignUp from '../imports/ui/Signup.jsx';

Meteor.startup(() => {
    render(<SignUp/>,document.getElementById('render-target'))
})