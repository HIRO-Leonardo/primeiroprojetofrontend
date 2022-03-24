import React, {Component} from 'react'
import Axios from 'axios'
import Main from '../templates/main' 


const Headerprops = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir'
}



const baseUrl = "http://localhost:3001/users"

const initialState = {
    user: {name: '', email:''},
    list: []

}

export default class UserCrud extends Component {

    state = {...initialState }

    componentWillMount(){
        Axios(baseUrl).then(resp => {
            this.setState({ list: resp.data})
        })
    }



    clear(){
        this.setState({user: initialState.user })
    }
    save(){
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        Axios[method](url, user)
                .then(resp => {
                        const list = this.getUpdateList(resp.data)
                        this.setState({user: initialState.user, list})
                })
    }

    getUpdateList(user) {
        const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list
    }

    updateField(event){
        const user  = {...this.state.user }
        user[event.target.name] =  event.target.value
        this.setState({user})

    }

    renderForm() {
        return (
            <div className='form'>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form group">
                            <label>Nome</label>
                            <input type='text' className='form-control' name='name'
                             value={this.state.user.name}
                             onChange={e => this.updateField(e)}
                             placeholder='Digite o nome....' />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form group">
                            <label>E-mail</label>
                            <input type='text' className='form-control' name='email'
                             value={this.state.user.email}
                             onChange={e => this.updateField(e)}
                             placeholder='Digite o E-mail....' />

                        </div>
                    </div>
                </div>
                <hr />
                    <div className="row">
                        <div className="col-12 justify-conten-end">
                            <button className="btn btn-primary" 
                                onClick={e => this.save(e)}>
                                Salvar
                            </button>
                            <button className="btn btn-seconsary ml-2"
                            onClick={e => this.clear(e)}>
                                Cancelar
                            </button>
                            
                        </div>
                    </div>
            </div>
        )
    }

        load(user) {
            this.setState({ user })
        }
        remove(user){
            Axios.delete(`${baseUrl}/ ${user.id}`).then(resp => {
                const list = this.state.list.filter(resp.data)
                this.setState({list})
            })
        }

        renderTable(){
            return (
                <table className="table mt-4">
                    <thead>
                        <tr>
                        <th>ID</th>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Ações</th>

                        </tr>

                    </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                </table>
            )
        }

        renderRows(){
            return this.state.list.map(user => {
                return(
                    <tr key={user.id}>
                         <td>{user.name}</td>
                         <td>{user.email}</td>
                         <td>
                            <button className="btn btn-warning"
                            onClick={() => this.load(user)}>
                                <i className='fa fa-pencil'
                                ></i>
                            </button>
                            <button className="btn btn-danger ml-2"
                            onClick={() => this.remove(user)}>
                                <i className='fa fa-trash'
                                ></i>
                            </button>

                         </td>
                    </tr>
                )
            })
        }




    render() {
        console.log(this.state.list)
        return (
            <Main {...Headerprops}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}

