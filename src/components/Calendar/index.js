import React from 'react';
import { CalendarIntro } from './data';
import { CalendarSection, Calendarh1, Calendarp } from './css.js';

const Calendar = () => {
	const { headline, pointOne, pointTwo, pointThree, pointFour } = CalendarIntro;
	return (
		<CalendarSection>
			<Calendarh1>{headline}</Calendarh1>
			<Calendarp>{pointOne}</Calendarp>
			<Calendarp>{pointTwo}</Calendarp>
			<Calendarp>{pointThree}</Calendarp>
			<Calendarp>{pointFour}</Calendarp>

			<iframe
				src="https://teamup.com/ksk9yuu9o3wmakd7vg?showHeader=0&showProfileAndInfo=0&showSidepanel=1&disableSidepanel=1&showViewSelector=0&showMenu=0&showAgendaHeader=1&showAgendaDetails=0&showYearViewHeader=1"
				width="100%"
				height="800px"
				frameBorder="0"
				title="Events Calendar"
			/>
		</CalendarSection>
	);
};

export default Calendar;
