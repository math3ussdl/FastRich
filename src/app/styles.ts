import styled from 'styled-components';

export const EditorContainer = styled.div`
  background-color: #eeeeee;
  max-height: 100vh;
  height: 100vh;
  padding: 15px 15px 15px 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  .slate {
    background-color: #fff;
    height: 430px;
    width: 730px;

    padding: 30px;

    transform: rotate3d(1deg);
    box-shadow: 0 1.4rem 3.5rem rgba(0, 0, 0, 0.2);
    border-radius: 0.8rem;
  }
`;
