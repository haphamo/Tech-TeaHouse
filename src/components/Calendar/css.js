import styled from 'styled-components';
import { H2 } from '../../theme/typography';

const CalendarSection = styled.section`
	padding-top: 60px;
	padding-bottom: 60px;
	background: #f5f5f5;
	text-align: center;
`;

const Calendarh1 = styled(H2)`
  margin: 0;
`;

const Calendarp = styled.p`
line-height: 30px;
color: #333333
text-align: center;
padding: 10px 20px 10px 20px
`;

export { CalendarSection, Calendarh1, Calendarp };
