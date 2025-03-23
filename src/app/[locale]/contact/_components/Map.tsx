export default function Map() {
  return (
    <div className="h-[400px] animate-[fadeIn_0.5s_ease-out_0.4s_both] overflow-hidden rounded-2xl shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.66325428613!2d31.23594851511493!3d30.04441758188393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458409b6f5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sKoshary+Al-Tahrir!5e0!3m2!1sen!2seg!4v1234567890123!5m2!1sen!2seg"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
