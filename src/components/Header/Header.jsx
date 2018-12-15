import React from 'react'
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
    style={{ whiteSpace: 'nowrap' }}
    mt={10}
    color='#2B547E'
    fontSize={[16, 16, 20]}>
    <span style={{ fontWeight: 'bold' }}>{props.name}: </span>
    <span>{props.text}</span>
  </Box>
)

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
        <strong>Stéfano Damiano</strong>
        <Box
          fontSize={[23]}>
          <strong>Desenvolvedor Front-End</strong>
        </Box>
      </Box>
      <Flex
        flexDirection={['column', 'row', 'row']}>
        <Box>
          <HeaderItem
            name='Email'
            text='mineiro.guaxupe@gmail.com'
          />
          <HeaderItem
            name='Phone'
            text='11 97027-9708'
          />
        </Box>
        <Box ml={[0, 10, 10]}>
          <HeaderItem
            name='Nasc'
            text='08/08/1989'
          />
          <HeaderItem
            name='Phone'
            text='11 97027-9708'
          />
        </Box>
      </Flex>
    </Box>
  </Flex>
)

export default Header
