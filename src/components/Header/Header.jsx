import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Flex from '../../components/elements/Flex'
import Box from '../../components/elements/Box'
import Me from '../../assets/me.jpeg'

const Image = styled.img`
    height: 100%;
    border-radius: 50%;
`

const HeaderItem = (props) => (
  <Box
    mt={10}
    style={{ whiteSpace: 'nowrap' }}
    color='#2B547E'
    fontSize={[16, 16, 20]}>
    <span style={{ fontWeight: 'bold' }}>{props.name}: </span>
    <span>{props.text}</span>
  </Box>
)

HeaderItem.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string
}

const Header = (props) => (
  <Flex
    width='100%'
    flexDirection={['column', 'row', 'row']}
    borderBottom='1px solid #e6e6e6'
    pb={40}
    alignItems='center'>
    <Box
      p={15}
      pr={25}
      height={130}>
      <Image src={Me} alt='Stéfano' />
    </Box>
    <Box>
      <Box
        mb={15}
        fontSize={[28]}>
        <strong>{props.name}</strong>
        <Box
          fontSize={[23]}>
          <strong>{props.description}</strong>
        </Box>
      </Box>
      <Flex
        flexWrap='wrap'
        flexDirection={['column', 'row', 'row']}>
        {
          props.items.map((item, index) => (
            <Box
              width='50%'
              key={index}>
              <HeaderItem
                name={item.name}
                text={item.text}
              />
            </Box>
          ))
        }
      </Flex>
    </Box>
  </Flex>
)

Header.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  items: PropTypes.array
}

export default Header
