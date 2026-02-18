'use client';

import Image from 'next/image';
import { useBlogsContext } from '@/context/OurBlogsContext';
import Loader from '@/ui/Loader';
import { useEffect } from 'react';
import ContactUsForm from '../ContactUs/ContactUsForm';

export default function BlogDescription({ slug }: any) {
  const { blogDetail, blogDetailLoading, fetchSingleBlog } = useBlogsContext();
  const { data }: any = blogDetail;

  useEffect(() => {
    fetchSingleBlog(slug);
  }, []);

  return (
    <div className="hero-child-container">
      <div className="max-w-7xl mx-auto py-10 px-4">
        {blogDetailLoading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* LEFT — BLOG CONTENT */}
            <div className="lg:col-span-2">

              {/* Image */}
              <div className="relative w-full h-[380px] rounded-2xl overflow-hidden mb-8">
                {data?.image && (
                  <Image
                    src={data.image}
                    alt={data.name}
                    fill
                    className="object-contain"
                  />
                )}
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-[#172C45] mb-4 poppins">
                {data?.name}
              </h1>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-6">
                {data?.categories.map((cat: any) => (
                  <span
                    key={cat.id}
                    className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full"
                  >
                    {cat.name}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                {data?.description}
              </p>

              {/* Blog Content */}
              <div
                className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: data?.content }}
              />

            </div>

            {/* RIGHT — CONTACT FORM */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white shadow-xl rounded-2xl py-6 border">

                {/* <h2 className="text-xl font-semibold mb-4">
                  Contact Us
                </h2>

                <form className="space-y-4">

                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring"
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring"
                  />

                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring"
                  />

                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring"
                  />

                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                  >
                    Submit
                  </button>

                </form> */}
				<ContactUsForm />
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
