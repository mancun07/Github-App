import React from 'react'
import Proptypes from 'prop-types'

const RepoItem = ({repo, myStyle}) => {
    return (
        <div className="repo-item my-1 p-1" style={myStyle}>
            <a href={repo.html_url}>{repo.name}</a>        
        </div>
    )
}

RepoItem.propTypes = {
    repo: Proptypes.object.isRequired
}

export default RepoItem
