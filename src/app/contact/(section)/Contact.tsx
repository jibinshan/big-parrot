"use client";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Mail, MapPin, MoveRight, Phone } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const FormValidation = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." }),
  reason: z.string(),
  message: z.string(),
});

type FormData = z.infer<typeof FormValidation>;

const Contact = ({}) => {
  const form = useForm<FormData>({
    resolver: zodResolver(FormValidation),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      reason: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    bookTableMutation.mutate(data);
  };

  const bookTableMutation = useMutation({
    mutationFn: async (values: z.infer<typeof FormValidation>) => {
      return await axios.post("/api/contact", values);
    },
    onSuccess: () => {
      toast(
        (t) => (
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-center text-black">
              Your reservation request has been successfully submitted to the
              restaurant!
            </p>
            <button
              onClick={() => {
                toast.dismiss(t.id);
                form.reset();
              }}
              className="rounded bg-primary px-4 py-2 text-white"
            >
              OK
            </button>
          </div>
        ),
        { duration: Infinity },
      );
    },
    onError: () => {
      toast.error(
        "There was an error submitting your message. Please try again later",
      );
    },
  });
  return (
    <section className="flex h-full w-full items-center justify-center bg-white md:mt-32">
      <div className="flex h-full w-full flex-col items-center justify-center gap-[2.5rem] px-0 pl-0 md:px-2">
        <div className="flex w-full flex-col lg:flex-row">
          <div
            style={{
              backgroundImage: "url(/images/contact/contact2.jpeg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="relative flex h-screen w-full items-center justify-center lg:ml-[-10px] lg:w-1/2"
          >
            <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/50"></div>
            <div className="md:h-7/12 z-40 flex w-full flex-col items-center justify-center gap-16 px-3 md:w-7/12 md:items-start md:justify-start md:px-0">
              <div className="flex w-full flex-col gap-10">
                <div className="flex w-full flex-col gap-2">
                  <p className="text-center font-[Playfair] text-7xl font-extralight md:text-start">
                    Get in touch
                  </p>
                  <p className="text-center text-sm font-light md:text-start">
                    Use the form on the right to send us a message.
                  </p>
                </div>
                <div className="flex items-center justify-center gap-3 md:justify-start">
                  <Button
                    variant="ghost"
                    asChild
                    className="px-1 py-1 hover:bg-transparent"
                  >
                    <Link
                      href="https://www.instagram.com/bigparrotuk/"
                      target="_blank"
                    >
                      <span className="sr-only">Instagram</span>
                      <Icons.instagram />
                    </Link>
                  </Button>
                  {/* <Button
                    variant="ghost"
                    asChild
                    className="px-1 py-1 hover:bg-transparent"
                  >
                    <Link href="https://www.tripadvisor.com/Restaurant_Review-g186337-d23660134-Reviews-or30-Bavette_Steak_House_Liverpool-Liverpool_Merseyside_England.html">
                      <span className="sr-only">Trip Advisor</span>
                      <Icons.tripAdvisor />
                    </Link>
                  </Button> */}
                  <Button
                    variant="ghost"
                    asChild
                    className="px-1 py-1 hover:bg-transparent"
                  >
                    <Link
                      href="https://maps.app.goo.gl/sLVM6Dzr39HDM6rY9"
                      target="_blank"
                    >
                      <span className="sr-only">Google</span>
                      <Icons.google />
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    asChild
                    className="px-1 py-1 hover:bg-transparent"
                  >
                    <Link
                      href="https://www.tripadvisor.com/Restaurant_Review-g187069-d27936764-Reviews-Big_Parrot_Tapas_Bar-Manchester_Greater_Manchester_England.html"
                      target="_blank"
                    >
                      <span className="sr-only">Tripadvisor</span>
                      <Icons.tripAdvisor />
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    asChild
                    className="px-1 py-1 hover:bg-transparent"
                  >
                    <Link
                      href="https://www.facebook.com/bigparrotuk/"
                      target="_blank"
                    >
                      <span className="sr-only">Facebook</span>
                      <Icons.facebook />
                    </Link>
                  </Button>

                  {/* <Button
                    variant="ghost"
                    asChild
                    className="px-1 py-1 hover:bg-transparent"
                  >
                    <Link href="">
                      <span className="sr-only">Facebook</span>
                      <Icons.facebook />
                    </Link>
                  </Button> */}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-lg font-semibold">Working Hours</p>
                <div className="flex gap-7">
                  <div className="flex flex-col gap-2">
                    <p className="text-[#b3b3aa]">Saturday</p>
                    <p className="text-[#b3b3aa]">Sunday</p>
                    <p className="text-[#b3b3aa]">Monday</p>
                    <p className="text-[#b3b3aa]">Tuesday</p>
                    <p className="text-[#b3b3aa]">Wednesday</p>
                    <p className="text-[#b3b3aa]">Thursday</p>
                    <p className="text-[#b3b3aa]">Friday</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>12pm - 12am</span>
                    </p>
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>12pm - 9pm</span>
                    </p>
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>Closed</span>
                    </p>
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>5pm - 10:30pm</span>
                    </p>
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>5pm - 10:30pm</span>
                    </p>
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>5pm - 10:30pm</span>
                    </p>
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>5pm - 12am</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col pb-24 pt-5 lg:w-1/2 lg:items-center lg:justify-center">
            <div className="flex w-full flex-col gap-6 px-3 lg:w-3/5 lg:px-0">
              <div className="flex gap-6">
                <div>
                  <div className="h-fit w-fit rounded-full p-2">
                    <MapPin className="text-black" />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Link
                    href="https://maps.app.goo.gl/sLVM6Dzr39HDM6rY9"
                    target="_blank"
                  >
                    <p className="font-inter text-black">
                      448C Barlow Moor Road,
                      <br /> Chorlton/Manchester M210BQ
                    </p>
                  </Link>
                  <Link
                    href="https://maps.app.goo.gl/sLVM6Dzr39HDM6rY9"
                    target="_blank"
                  >
                    <p className="flex gap-2 text-sm text-[#b3b3aa]">
                      <span>Get Direction</span>
                      <MoveRight />
                    </p>
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div>
                  <div className="h-fit w-fit rounded-full p-2">
                    <Phone className="text-black" />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Link href="tel:+0161 5196817">
                    <p className="text-black">+0161 5196817</p>
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div>
                  <div className="h-fit w-fit rounded-full p-2">
                    <Mail className="text-black" />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Link href="mailto:info@bruncho.co.uk">
                    <p className="text-black">info@bruncho.co.uk</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full px-3 lg:w-3/5 lg:px-0">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="h-full">
                  <div className="flex gap-4 pt-7">
                    <div className="flex w-full flex-col gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                placeholder="First Name"
                                {...field}
                                className="h-12 rounded-none border-b-[3px] border-l-0 border-r-0 border-t-0 border-b-[#f8f8f8] bg-[#f8f8f8] outline-none placeholder:text-[#787571] focus-visible:border-b-[2px] focus-visible:border-b-[#bc995d] focus-visible:ring-0"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                placeholder="Phone"
                                {...field}
                                className="h-12 rounded-none border-b-[3px] border-l-0 border-r-0 border-t-0 border-b-[#f8f8f8] bg-[#f8f8f8] outline-none placeholder:text-[#787571] focus-visible:border-b-[2px] focus-visible:border-b-[#bc995d] focus-visible:ring-0"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                placeholder="Email"
                                {...field}
                                className="h-12 rounded-none border-b-[3px] border-l-0 border-r-0 border-t-0 border-b-[#f8f8f8] bg-[#f8f8f8] outline-none placeholder:text-[#787571] focus-visible:border-b-[2px] focus-visible:border-b-[#bc995d] focus-visible:ring-0"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="reason"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                placeholder="Reason for contacting (optional)"
                                {...field}
                                className="h-12 rounded-none border-b-[3px] border-l-0 border-r-0 border-t-0 border-b-[#f8f8f8] bg-[#f8f8f8] outline-none placeholder:text-[#787571] focus-visible:border-b-[2px] focus-visible:border-b-[#bc995d] focus-visible:ring-0"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Textarea
                                placeholder="Your Message"
                                {...field}
                                className="h-24 rounded-none border-b-[3px] border-l-0 border-r-0 border-t-0 border-b-[#f8f8f8] bg-[#f8f8f8] outline-none placeholder:text-[#787571] focus-visible:border-b-[2px] focus-visible:border-b-[#bc995d] focus-visible:ring-0"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="flex w-full flex-col pt-7 lg:flex-row">
                    <Button
                      className="w-full py-6"
                      disabled={bookTableMutation.isPending}
                    >
                      Contact US
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[1300px] px-4 md:px-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.399473094071!2d-2.2802416234061185!3d53.443444972317536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487badf3db1314e7%3A0x97423dcbf0b16557!2sBig%20Parrot%20Tapas%20%26%20Bar%20in%20Manchester!5e0!3m2!1sen!2sin!4v1738152412717!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[500px] w-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
