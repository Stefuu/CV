import React from 'react'
import PropTypes from 'prop-types'
import Flex from '../elements/Flex'
import Box from '../elements/Box'

const LanguageItem = (props) => (
  <Box mb={5}>
    <Box>
      <strong>{props.name}</strong><span> - {props.level}</span>
    </Box>
  </Box>
)

LanguageItem.propTypes = {
  name: PropTypes.string,
  level: PropTypes.string
}

const Languages = (props) => (
  <Flex
    mb={30}
    width='100%'
    flexDirection='column'>
    <Box
      mb={5}
      fontSize={24}
      color='#cc7000'>
      <strong>Idiomas:</strong>
    </Box>
    {
      props.items.map((item, index) => (
        <LanguageItem key={index} {...item} />
      ))
    }
  </Flex>
)

Languages.propTypes = {
  items: PropTypes.array
}

export default Languages
