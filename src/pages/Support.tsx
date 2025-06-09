
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const faqs = [
    {
      question: "How can I track my order?",
      answer: "You can track your order using the tracking number sent to your email after purchase."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all products in original condition."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship worldwide. Shipping costs and times vary by location."
    },
    {
      question: "How can I contact customer service?",
      answer: "You can reach us through this contact form, email, or our live chat feature."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-white py-12 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Center</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're here to help! Find answers to common questions or get in touch with our team.
              </p>
            </div>
          </div>
        </section>

        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Get in Touch</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Name
                        </label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Subject
                        </label>
                        <Input
                          type="text"
                          value={formData.subject}
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message
                        </label>
                        <textarea
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full gradient-primary text-white">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* FAQ Section */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                        <p className="text-gray-600">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Support;
