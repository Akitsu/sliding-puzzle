import InputNumber from 'rc-input-number';
import 'rc-input-number/assets/index.css';
import styled from 'styled-components';

interface SizeConfiguratorProps {
  gridSize: number;
  initialize: (size: number) => void;
}

const SizeConfigurator = ({ gridSize, initialize }: SizeConfiguratorProps) => {
  return (
    <StyledSizeContainer>
      <StyledSizeText>Puzzle size:</StyledSizeText>
      <InputNumber defaultValue={gridSize} min={3} max={18} style={{ minWidth: '50px', maxWidth: '50px' }} onChange={(size) => initialize(size)} />
    </StyledSizeContainer>
  );
};

const StyledSizeText = styled.div`
  margin-right: 10px;
`;

const StyledSizeContainer = styled.div`
  display: flex;
  font-size: 22px;
  padding-bottom: 20px;
`;

export default SizeConfigurator;
