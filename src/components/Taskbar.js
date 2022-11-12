import React, { useContext } from 'react'
import DataContext from '../contexts/dataContext'
import { TaskBar, List } from '@react95/core'
import styled from 'styled-components'

const Link = styled.a`
    text-decoration: none;
    color: inherit;
`


function Taskbar() {
    const { projectRepo, react95Repo } = useContext(DataContext).getProjectInfo();
    console.log("If you liked my website enough to check out from developer tools :)",projectRepo)
    return (
        <TaskBar
            list={
                <List>
                      <List.Item className="pointer" icon="progman_2">
                        <Link>Less is more.</Link>
                    </List.Item>
                    <List.Divider />
                    <List.Item className="pointer" icon="grpconv_100">
                        <Link href={react95Repo} target="_blank">Built with React95</Link>
                    </List.Item>
                    <List.Divider />
                    <List.Item className="pointer" icon="folder_file">
                        <Link href={projectRepo} target="_blank">Source Code</Link>
                    </List.Item>
                    <List.Divider />
                    <List.Item className="pointer" icon="user_7">
                        <Link href={"https://old.erkmenesen.com"} target="_blank">Old Site</Link>
                    </List.Item>
                </List>
            }
        />
    )
}

export default Taskbar