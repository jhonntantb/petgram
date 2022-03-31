import styled, { css } from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`

export const Image = styled.img`
  box-sizing: border-box;
  border: 1px solid #eee;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
  object-fit: cover;
  overflow: hidden;
  border-radius: 50%;
  height: 75px;
  width: 75px;
  margin-bottom: 5px;
  background-color: #ddd;
  ${props => props.loading === 'true' && css`
        object-fit: scale-down;
    `}
`
