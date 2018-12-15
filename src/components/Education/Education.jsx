import React from 'react'
import Flex from '../elements/Flex'
import Box from '../elements/Box'

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
    <Box>
      <strong>Universidade Presbiteriana Mackenzie</strong>
    </Box>
    <Box>
      <span>Bacharel em Ciência da Computação</span>
    </Box>
    <Box>
      <span>2008 - 2012</span>
    </Box>
  </Flex>
)

export default Education
