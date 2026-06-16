import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        activities: "Activities",
        calendar: "Calendar",
        whatsapp: "WHATSAPP",
      },
      hero: {
        subtitle: "\"You’re almost there\"",
        title: "Third Place Málaga",
        calendar: "Check our calendar",
        discover: "Discover Activities"
      },
      intro: {
        title1: "Your Bilingual Community in Málaga",
        centeredAround: "centered around",
        values: "Movement · Body Awareness · Creativity · Connection · Playfulness",
        join: "Join us for an event today 🙂",
        p1: "Connect with like-minded individuals passionate about community, conscious living, movement, body-awareness, creativity, connection and Laughter.",
        p2: "Whether you’re seeking new friendships, exploring spiritual practices, looking for a new creative hobby, we welcome you!",
        p3: "Let’s build a supportive network, share ideas, and discover the beauty of Malaga together.",
        checkCalendar: "Check our calendar for the next event"
      },
      experience: {
        title: "The Experience",
        discover: "Discover More →",
        activities: {
          contact: "Contact Improvisation",
          sacred: "Sacred Connections",
          breath: "Breath and Release",
          mens: "Men's Circle",
          improv: "Improv Theatre",
          playfights: "Conscious Playfights"
        }
      },
      joinToday: "Join us today!",
      whatsappMessage: "Hi! My name is [Name], I'm [Age] years old. I'm interested in joining Third Place Málaga 👋 Activities I'm interested in: [Activity]",
      footer: {
        about: "About",
        team: "The Team",
        contact: "Contact Us",
        activities: "Activities",
        connect: "Connect",
        mail: "Mail",
        visit: "Visit Our Space",
        crafted: "Your bilingual community in Malaga"
      }
    }
  },
  es: {
    translation: {
      nav: {
        home: "Inicio",
        activities: "Actividades",
        calendar: "Calendario",
        whatsapp: "WHATSAPP",
      },
      hero: {
        subtitle: "\"Ya casi estás allí\"",
        title: "Third Place Málaga",
        calendar: "Consulta nuestro calendario",
        discover: "Descubre Actividades"
      },
      intro: {
        title1: "Tu Comunidad Bilingüe en Málaga",
        centeredAround: "centrada en",
        values: "Movimiento · Conciencia Corporal · Creatividad · Conexión · Juego",
        join: "Únete a un evento hoy 🙂",
        p1: "Conecta con personas afines apasionadas por la comunidad, la vida consciente, el movimiento, la conciencia corporal, la creatividad, la conexión y la risa.",
        p2: "Ya sea que busques nuevas amistades, explorar prácticas espirituales o un nuevo pasatiempo creativo, ¡te damos la bienvenida!",
        p3: "Construyamos una red de apoyo, compartamos ideas y descubramos juntos la belleza de Málaga.",
        checkCalendar: "Consulta nuestro calendario para el próximo evento"
      },
      experience: {
        title: "La Experiencia",
        discover: "Descubre Más →",
        activities: {
          contact: "Contact Improvisación",
          sacred: "Conexiones Sagradas",
          breath: "Respiración y Liberación",
          mens: "Círculo de Hombres",
          improv: "Teatro de Improvisación",
          playfights: "Lucha Consciente"
        }
      },
      joinToday: "¡Únete hoy!",
      whatsappMessage: "¡Hola! Me llamo [Nombre], tengo [Edad] años. Me interesa unirme a Third Place Málaga 👋 Actividades que me interesan: [Actividad]",
      footer: {
        about: "Sobre Nosotros",
        team: "El Equipo",
        contact: "Contáctanos",
        activities: "Actividades",
        connect: "Conecta",
        mail: "Correo",
        visit: "Visita Nuestro Espacio",
        crafted: "Tu comunidad bilingüe en Málaga"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;