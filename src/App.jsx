import './App'
import StyledButton, { FancyButton,SubmitButton } from './components/Button/Button'

 function App() {
  return(
    <div className='App'>
      <StyledButton type='submit'>Styled button</StyledButton>
      <div>
        <br />
      </div>
     <StyledButton variant='outline'>Styled button</StyledButton>
     <div>
        <br />
      </div>
      
     <FancyButton as='a'>Fancy button</FancyButton>
     <div>
        <br />
      </div>
      <SubmitButton>Submit Button</SubmitButton>
    </div>
  )
}
export default App