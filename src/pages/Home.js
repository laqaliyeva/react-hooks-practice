import React, {useContext} from 'react'
import {Search} from '../components/Search'
import {Card} from '../components/Card'
import {Alert} from '../components/Alert'
import {GithubContext} from '../context/github/githubContext'
import {Loader} from '../components/Loader'

export const Home = () => {

    const {users, loading} = useContext(GithubContext)

    return (
        <React.Fragment>
            <Alert alert={{text: 'Test text'}} />
            <Search />
            <div className="row">
                {
                    loading
                        ? (<Loader />)
                        : users.map((user) => (
                            <div className="col-sm-4 mb-4" key={user.id}>
                                <Card user={user}/>
                            </div>
                        ))
                }
            </div>
        </React.Fragment>
    )
}