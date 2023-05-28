import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <Wrapper className='full-page'>
            <div>
                <h3>ohh ! page not found</h3>
                <p>we can't seem to find the page you are looking for </p>
                <Link to="/"> back home</Link>
            </div>
        </Wrapper>
    )
}

export default Error;

const Wrapper = styled.main`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--grey-500);
  }
  a {
    color: var(--primary-500);
    text-decoration: underline;
    text-transform: capitalize;
  }
`;

