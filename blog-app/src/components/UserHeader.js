import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {

    render() {
        const { user } = this.props;
        if(!user) {
            return null;
        }
        else {
            return (
                <div className='header'>{user.name}</div>
            );
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    const user = state.user.find((user) => {
        return user.id === ownProps.userId;
    });

    return { user: user };
}

export default connect(mapStateToProps)(UserHeader);