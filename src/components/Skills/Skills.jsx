import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Flex from '../elements/Flex'
import Box from '../elements/Box'

const Ul = styled(Box)`
    list-style: none;
    padding: 0;
    margin: 0;
    column-count: 2;
    column-gap: 20px;
`

const Skills = (props) => (
  <Flex
    mb={30}
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
        props.skills.map((item, index) => (
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

Skills.propTypes = {
  skills: PropTypes.array
}

export default Skills
