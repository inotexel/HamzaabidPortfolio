import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'react-hot-toast';
import styles from '../styles/Contact.module.css';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const toastId = toast.loading('Sending message...');
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Message sent! I\'ll get back to you soon.', { id: toastId });
      setIsSubmitting(false);
      reset();
    }, 2000);
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Let's <span className="text-gradient">Connect</span></h2>
          <p className={styles.subtitle}>Have a project in mind? Let's build something extraordinary together.</p>
        </div>

        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.infoCard}>
              <div className={styles.icon}><Mail size={24} /></div>
              <div>
                <h3>Email</h3>
                <p>hamzaabid677@gmail.com</p>
              </div>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.icon}><Phone size={24} /></div>
              <div>
                <h3>Phone</h3>
                <p>+92 309 2238433</p>
              </div>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.icon}><MapPin size={24} /></div>
              <div>
                <h3>Location</h3>
                <p>Lahore, Pakistan</p>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.formWrapper}
          >
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`${styles.input} ${errors.name ? styles.error : ''}`}
                  {...register('name')}
                />
                {errors.name && <span className={styles.errorText}>{errors.name.message}</span>}
              </div>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  placeholder="Your Email"
                  className={`${styles.input} ${errors.email ? styles.error : ''}`}
                  {...register('email')}
                />
                {errors.email && <span className={styles.errorText}>{errors.email.message}</span>}
              </div>
              <div className={styles.formGroup}>
                <textarea
                  placeholder="Your Message"
                  className={`${styles.textarea} ${errors.message ? styles.error : ''}`}
                  {...register('message')}
                ></textarea>
                {errors.message && <span className={styles.errorText}>{errors.message.message}</span>}
              </div>
              <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
