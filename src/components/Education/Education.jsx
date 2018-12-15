import React from 'react'
import PropTypes from 'prop-types'
import Flex from '../elements/Flex'
import Box from '../elements/Box'

const EducationItem = (props) => (
  <Box mb={5}>
    <Box>
      <strong>{props.name}</strong>
    </Box>
    <Box>
      <span>{props.type}</span>
    </Box>
    <Box>
      <span>{props.duration}</span>
    </Box>
  </Box>
)

EducationItem.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  duration: PropTypes.string
}

const Education = (props) => (
  <Flex
    mb={30}
    width='100%'
    flexDirection='column'>
    <Box
      mb={5}
      fontSize={24}
      color='#cc7000'>
      <strong>Educação:</strong>
    </Box>
    {
      props.items.map((item, index) => (
        <EducationItem key={index} {...item} />
      ))
    }
  </Flex>
)

Education.propTypes = {
  items: PropTypes.array
}

export default Education
