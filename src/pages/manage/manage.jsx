import React from 'react';
import {Switch, Route} from 'react-router-dom';
import S from './manage.module.css';
import Menu from '../../components/menu/menu';
import DataView from './_children/data-view/data-view';
import DataEdit from './_children/data-edit/data-edit';
import Subtitle from '../../components/subtitle/subtitle';

const Option = Menu.Option;

class Manage extends React.Component {

  state = {
    data: [],
    edit: false,
  };

  getFields = () => {
    return fetch('/fields.json')
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
        <Subtitle>Manage Data</Subtitle>
        <div className={S.manage}>
          <Menu>
            {
              data.map((r) => {
                return (
                  <Option key={r.field}  to={{ pathname: `/manage/${r.field}`, state: {...r}} }>
                    {r.field}
                  </Option>
                );
              })
            }
          </Menu>
          <div className={S.content}>
            <div className={S.wrap}>
              <Switch>
                <Route path='/manage/:id/edit' component={DataEdit}/>
                <Route path='/manage/:id' component={DataView}/>
                <Route render={() => {
                  return 'seleccione una opción'
                }}/>
              </Switch>
            </div>
          </div>
        </div>
      </>

    );
  }
}

export default Manage;
