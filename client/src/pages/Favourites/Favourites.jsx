import styled from 'styled-components'

import Construction from '../../assets/images/construction.gif' 

export default function Favourites(){

return(
  <>
    <Container>
    </Container>
    </>
)


}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: 
    url(${Construction});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: scroll;
  justify-content: center;
  align-items: center;
  margin: .5rem;
  height: 70vh;
  position: relative;
  `