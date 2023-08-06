import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";


const contactFormData = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  message: z.string().min(20),
});

type ContactFormData = z.infer<typeof contactFormData>;

export const Contact = ({ contactRef }: { contactRef: React.MutableRefObject<HTMLElement | null> }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormData),
  });

  const [loading, setLoading] = useState<boolean>(false)
  const [emailSent, setEmailSent] = useState<boolean>(false)

  const sendEmail = async (data: ContactFormData) => {
    console.log(data)
    try {
      setLoading(true)
      const emailResponse = await axios.post(`/api/send-email`, data);
      console.log(emailResponse)
      reset()
      setEmailSent(true)
    }
    catch (e) {
      console.log(e)
    }
    finally {
      setLoading(false)
    }

  }
  return <section
    className="w-full max-w-7xl mx-auto p-5 min-h-[calc(100vh-64px-64px)] sm:min-h-[calc(100vh-80px-64px)]"
    ref={contactRef}
    id="contact">
    <div className="my-5 text-xl font-bold">Contact Me!</div>
    {!emailSent ? (<div>
      <form action="" className="border space-y-5 p-5 max-w-2xl shadow-lg rounded" onSubmit={handleSubmit(sendEmail)}>
        <div>
          <input type="text" placeholder="Name" id="name" className={`w-full p-2.5 rounded outline-none border ${!!errors?.name ? "border-red-500" : "border-emerald-500"} focus:border-2`}
            {...register("name")}
          />
          <div className="text-red-500 text-sm">{!!errors?.name ? errors.name.message : null}</div>
        </div>

        <div>
          <input type="email" placeholder="Email" className={`w-full p-2.5 rounded outline-none border ${!!errors?.email ? "border-red-500" : "border-emerald-500"} focus:border-2`}
            {...register("email")}
          />
          <div className="text-red-500 text-sm">{!!errors?.email ? errors.email.message : null}</div>

        </div>
        <div>
          <textarea id="message" placeholder="Message" className={`w-full p-2.5 rounded outline-none border ${!!errors?.message ? "border-red-500" : "border-emerald-500"} focus:border-2`} rows={8}
            {...register("message")}
          />
          <div className="text-red-500 text-sm">{!!errors?.message ? errors.message.message : null}</div>

        </div>
        <input type="submit" className={`w-full p-2.5 rounded text-white font-bold ${loading ? "bg-emerald-300 cursor-not-allowed" : "bg-emerald-500 hover:bg-emerald-700 cursor-pointer"}`} disabled={loading} />
      </form>
    </div>
    ) : (<div className="h-72 border max-w-2xl rounded bg-emerald-50 flex items-center justify-center border-emerald-500 shadow-lg">
      <div className="text-emerald-700 text-center mb-0.5">
        <div className="font-bold">Thank You for Contacting Me!</div>
        <div>I will respond as soon as possible.</div>
      </div>
    </div>
    )}
  </section>
}