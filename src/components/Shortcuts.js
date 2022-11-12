import React from 'react'
import styled from 'styled-components'
import { Icon } from '@react95/core'
import {startWebamp} from '../utils/startWebamp';


const StyledShorcut = styled.div`
    margin-left: 20px;
    margin-top: 20px;
	align-items: center;
`;

function Shortcuts({ openExplorer }) {
    return (
        <div>
            <StyledShorcut>
                <Icon
                    className="pointer"
                    name="windows_explorer"
                    onClick={() => openExplorer()}
                />
                <div>Explorer</div>
            </StyledShorcut>
            <StyledShorcut>
                <Icon
                    className="pointer"
                    name="bulb"
                    onClick={()=>window.open('https://projects.erkmenesen.com', '_blank')}
                />
                <div>Projects</div>
            </StyledShorcut>
            <StyledShorcut>
                <Icon
                    className="pointer"
                    name="media_cd"
                    onClick={()=>startWebamp()}
                />
                <div>Media</div>
            </StyledShorcut>
            <StyledShorcut>
                <Icon
                    className="pointer"
                    name="progman_21"
                    onClick={()=>window.open('https://www.linkedin.com/in/erkmenesen', '_blank')}
                />
                <div>LinkedIn</div>
            </StyledShorcut>
            <StyledShorcut>
                <Icon
                    className="pointer"
                    name="regedit_101"
                    onClick={()=>window.open('https://www.github.com/erkmenesen', '_blank')}
                />
                <div>GitHub</div>
            </StyledShorcut>
            <StyledShorcut>
                <Icon
                    className="pointer"
                    name="progman_13"
                    onClick={()=>window.open('https://www.instagram.com/erkmenthemighty', '_blank')}
                />
                <div>Instagram</div>
            </StyledShorcut>
            <StyledShorcut>
                <Icon
                    className="pointer"
                    name="mic"
                    onClick={()=>window.open('https://www.soundcloud.com/erkmen', '_blank')}
                />
                <div>Soundcloud</div>
            </StyledShorcut>
        </div>
    )
}

export default Shortcuts
