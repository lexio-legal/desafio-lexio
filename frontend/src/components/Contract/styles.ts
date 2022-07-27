import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    background-color: ${theme.colors.gray300};
    border-radius: ${theme.border.radiusX16};
    font-size: ${theme.font.sizes.small};
    padding: 0 1rem;
    min-width: 980px;
  `}
`

export const Name = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray600};
    font-size: ${theme.font.sizes.small};

    > p {
      color: ${theme.colors.text};
    }
  `}
`

export const Status = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: ${theme.colors.blue};
    color: ${theme.colors.white};
    border-radius: ${theme.border.radiusX8};
    padding: 0.5rem 1rem;
    min-width: fit-content;
  `}
`
export const Object = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray600};
    max-width: 30rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  `}
`
export const ListPart = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray200};
    padding: 1rem 1rem;
    height: 100%;
    > p {
      font-weight: bold;
      color: ${theme.colors.gray600};
      margin-bottom: 1rem;
    }

    > ul {
      list-style: none;
      display: flex;
      gap: 0.5rem;

      li {
        background-color: ${theme.colors.gray550};
        padding: 1rem;
        border-radius: 50%;
        height: 3rem;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  `}
`

export const Button = styled.button`
  height: 100%;
  border: none;
  background-color: transparent;
  cursor: pointer;
`
