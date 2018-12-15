import React from 'react'
import styled from 'styled-components'
import Box from '../elements/Box'

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const XperienceItem = (props) => (
  <Box
    lineHeight='1.38'
    width='100%'
    mb={20}>
    <Box
      mb={5}
      fontSize={18}>
      <strong>{props.company}</strong>
    </Box>
    <Box ml={10}>
      <Box
        mb={10}
        fontSize={16}>
        <span>{props.duration}</span>
      </Box>
      <Box mb={10}>
        <span>{props.position}</span>
      </Box>
      <Box
        width='90%'
        mb={10}>
        <span>{props.description}</span>
      </Box>
      <Box
        width='90%'>
        <Box><span>Destaques:</span></Box>
        {
          props.highlights &&
            <Ul>
              {props.highlights.map((item, index) => (
                <Box
                  key={index}
                  as='li'
                  mt={index > 0 ? 5 : 0}
                >{item}</Box>
              ))}
            </Ul>
        }
      </Box>
    </Box>
  </Box>
)

export default XperienceItem
