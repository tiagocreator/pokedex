import styled from 'styled-components';

export const ProgressBarStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-inline-start: 18px;
  height: 33px;
  width: 100%;
`;
export const BaseBox = styled.div`
  height: 12px;
  max-height: 12px;
  min-height: 12px;
  border-radius: 4px;
  border: 0.3px solid rgba(0, 0, 0, 0.2);
`;
export const Progress = styled(BaseBox)`
  background: ${({ item }) =>
    item.base_stat <= 29
      ? '#f34444'
      : item.base_stat >= 30 && item.base_stat <= 59
      ? '#ff7f0f'
      : item.base_stat >= 60 && item.base_stat <= 89
      ? '#ffdd57'
      : item.base_stat >= 90 && item.base_stat <= 119
      ? '#a0e515'
      : '#23cd5e'};
  width: ${({ item }) => `${item.base_stat * 0.75}%`};
`;
