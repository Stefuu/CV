import React from 'react'
import PropTypes from 'prop-types'
import Flex from '../elements/Flex'
import Box from '../elements/Box'
import XperienceItem from '../Xperience/XperienceItem'

const Xperience = (props) => (
  <Box
    width='100%'
    mt={40}>
    <Box
      mb={[30, 0]}
      fontSize={24}
      color='#cc7000'>
      <strong>Experiências:</strong>
    </Box>
    <Flex
      width='100%'
      flexWrap='wrap'
      flexDirection={['column', 'row']}
      alignItems={['flex-start', 'space-between']}
      mt={10}>
      {
        props.items.map((item, index) => (
          <XperienceItem key={index} {...item} />
        ))
      }
    </Flex>
  </Box>
)

Xperience.propTypes = {
  items: PropTypes.array
}

export default Xperience
