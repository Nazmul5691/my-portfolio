import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      
      {/* Background Effect - Subtle Blue Glow on Top Left */}
      <div className="absolute top-0 left-0 w-125 h-125 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-[#0a0c14] border border-slate-800/60 rounded-[2.5rem] p-8 md:p-16 max-w-6xl mx-auto shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side: Contact Info */}
            <div className="space-y-12">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Get Ready To <br /> 
                <span className="text-blue-500">Create Great</span>
              </h2>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                    <Mail size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">E-mail:</p>
                    <p className="text-lg font-semibold text-gray-200">nazmulislam5691@gmail.com</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                    <MapPin size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Location:</p>
                    <p className="text-lg font-semibold text-gray-200">Tangail, Dhaka</p>
                  </div>
                </div>

                {/* Contact */}
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                    <Phone size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Contact:</p>
                    <p className="text-lg font-semibold text-gray-200">01714587902</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="space-y-6 bg-transparent">
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-8">Get In Touch</p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-500/50 transition-all text-gray-200"
                  />
                  {/* Phone Input */}
                  <input 
                    type="text" 
                    placeholder="Phone Number"
                    className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-500/50 transition-all text-gray-200"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Email Input */}
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-500/50 transition-all text-gray-200"
                  />
                  {/* Subject Input */}
                  <input 
                    type="text" 
                    placeholder="Subject"
                    className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-500/50 transition-all text-gray-200"
                  />
                </div>

                {/* Message Textarea */}
                <textarea 
                  rows={5}
                  placeholder="Your Message"
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-500/50 transition-all text-gray-200 resize-none"
                ></textarea>

                {/* Submit Button */}
               <button 
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-5 rounded-xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] shadow-xl shadow-purple-600/20 uppercase tracking-widest text-sm"
                >
                  Send a message <Send size={18} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;