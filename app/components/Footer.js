export default function Footer() {
    return (
      <section className="px-6 py-12 bg-white md:px-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          <div>
            <h3 className="text-2xl font-bold text-[#444] mb-4">quick links</h3>
            {["home", "services", "about", "doctors", "book", "review", "blogs"].map((link, idx) => (
              <a key={idx} href="#" className="block text-[#777] text-lg py-2 hover:text-[#16a085]">
                <i className="fas fa-chevron-right text-[#16a085] mr-2"></i> {link}
              </a>
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#444] mb-4">our services</h3>
            {["dental care", "message therapy", "cardiology", "diagnosis", "ambulance service"].map((service, idx) => (
              <a key={idx} href="#" className="block text-[#777] text-lg py-2 hover:text-[#16a085]">
                <i className="fas fa-chevron-right text-[#16a085] mr-2"></i> {service}
              </a>
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#444] mb-4">contact info</h3>
            {["+2-01288-95-4142", "+2-01288-95-4142", "johndoe@hotmail.com", "johndoe@gmail.com", "Minya, Maghagha - 61691"].map(
              (info, idx) => (
                <a key={idx} href="#" className="block text-[#777] text-lg py-2 hover:text-[#16a085]">
                  <i
                    className={`fas ${
                      idx < 2 ? "fa-phone" : idx < 4 ? "fa-envelope" : "fa-map-marker-alt"
                    } text-[#16a085] mr-2`}
                  ></i>{" "}
                  {info}
                </a>
              )
            )}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#444] mb-4">follow us</h3>
            {["facebook", "twitter", "instagram", "linkedin", "pinterest"].map((social, idx) => (
              <a key={idx} href="#" className="block text-[#777] text-lg py-2 hover:text-[#16a085]">
                <i className={`fab fa-${social} text-[#16a085] mr-2`}></i> {social}
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }