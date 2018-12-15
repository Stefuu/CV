import React from 'react'
import styled from 'styled-components'
import Flex from '../elements/Flex'
import Box from '../elements/Box'

const Ul = styled(Box)`
    list-style: none;
    padding: 0;
    margin: 0;
    column-count: 3;
    column-gap: 20px;
`

const skills = [
  'Javascript',
  'ES20XX',
  'HTML5',
  'CSS3',
  'React',
  'Graphql',
  'Relay',
  'Linux',
  'GIT',
  'Docker',
  'Gulp / Grunt',
  'Node',
  'Mongodb',
  'Rabbitmq',
  'SCRUM'
]

const Skills = (props) => (
  <Flex
    width='100%'
    flexDirection='column'>
    <Box
      mb={5}
      fontSize={24}
      color='#cc7000'>
      <strong>Skills:</strong>
    </Box>
    <Ul as='ul'>
      {
        skills.map((item, index) => (
          <Box
            as='li'
            mb={3}
            fontSize={[15, 18]}
            key={index}>
            <span>- {item}</span>
          </Box>
        ))
      }
    </Ul>
  </Flex>
)

export default Skills
