import React, { Component } from 'react';
import './UserInfo.scss';

class UserInfo extends Component {
  render() {
    const {
      email,
      phone,
      website,
      company: { name },
    } = this.props.user;
    return (
      <aside className="UserInfo">
        <ul className="list">
          <li>Contact me @</li>
          <li>
            <span>email :</span>
            <a>{email}</a>
          </li>
          <li>
            <span>Phome : </span>
            <a>{phone}</a>
          </li>
          <li>
            <span>Website : </span>
            <a>{website}</a>
          </li>
          <li>
            <span>Company : </span>
            {name}
          </li>
        </ul>
      </aside>
    );
  }
}

export default UserInfo;
