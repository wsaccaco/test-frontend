import React from 'react';
import {NavLink, Route} from 'react-router-dom'
import S from './request.module.css';
import Subtitle from '../../components/subtitle/subtitle';
import Divider from '../_children/divider/divider';


function ListItems({date, reason, status, className}){
  return (
    <div className={`${S.wrapItem} ${className}`} key={date}>
      <span className={S.item}>{date}</span>
      <span className={S.item}>{reason}</span>
      <div className={S.item} style={{justifyContent: 'flex-end'}}>
        <button className={`${S.button} ${S[status]}`}>{status}</button>
      </div>
    </div>
  )
}

class Manage extends React.Component {

  state = {
    data: [],
    edit: false,
  };

  getFields = () => {
    return fetch('/data.json')
      .then(r => r.json())
      .then(({data}) => {
        this.setState({
          data
        });
      });
  };

  componentDidMount() {
    this.getFields()
  }

  render() {
    let {data} = this.state;

    return (
      <>
        <Subtitle>Request</Subtitle>
        <div className={S.options}>
          <NavLink activeClassName={S.active} className={S.link} to={'/request/all'}>ALL</NavLink>
          <NavLink activeClassName={S.active} className={S.link} to={'/request/pending'}>PENDING</NavLink>
          <NavLink activeClassName={S.active} className={S.link} to={'/request/approved'}>APPROVED</NavLink>
          <NavLink activeClassName={S.active} className={S.link} to={'/request/dennied'}>DENIED</NavLink>
        </div>
        <Route path='/request/:status' render={({match}) => {
          const {status} = match.params;
          return (
            <>
              <Divider>{status.toUpperCase()} VALUES</Divider>
              <div className={`${S.request}`}>
                <ListItems date='DATE' reason='REASON' status='STATUS' className={S.title}>
                  {['date', 'reason', 'status']}
                </ListItems>
                {data.filter((item) => status === 'all' ? true : item.status === status ).map((props) =>
                  <ListItems key={props.date} {...props}/>
                )}
              </div>
            </>
          )
        }}/>
      </>

    );
  }
}

export default Manage;
