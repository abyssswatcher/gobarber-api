import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Mail from '../../lib/Mail';

class AppointmentCancellationMail {
  get key() {
    return 'AppointmentCancellationMail';
  }

  async handle({ data }) {
    const { appointment } = data;

    const appointmentDate = format(
      appointment.date,
      "'dia' dd 'de' MMMM', às' H:mm'h'",
      { locale: pt }
    );

    await Mail.sendMail({
      to: `${appointment.provider.name} <${appointment.provider.email}>`,
      subject: 'Agendamento cancelado',
      template: 'appointment-cancellation',
      context: {
        provider: appointment.provider.name,
        user: appointment.user.name,
        date: appointmentDate,
      },
    });
  }
}

export default new AppointmentCancellationMail();
