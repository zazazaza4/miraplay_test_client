import { FaFacebookF, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';
import { FaYoutube } from 'react-icons/fa6';

import { GAMES_ROUTE } from '@/constants';
import { AiFillWindows } from 'react-icons/ai';

export const categories = [
  { title: 'Ігри', link: GAMES_ROUTE },
  {
    title: 'Про платформу',
    link: '#',
  },
  { title: 'Сдай в аренду свій ПК', link: '#' },
  { title: 'Новини', link: '#' },
  {
    title: 'FAQ',
    link: '#',
  },
];

export const cabinet = [
  { title: 'Мої дані', link: '#' },
  {
    title: 'Тариф',
    link: '#',
  },
  { title: 'Мій рахунок', link: '#' },
  {
    title: 'Реферальна програма',
    link: '#',
  },
  { title: 'Оренда ПК', link: '#' },
];

export const info = [
  {
    title: '+380688338888',
    Icon: FaPhoneAlt,
    link: 'tel:+380688338888',
  },
  {
    title: 'support@miraplay.cloud',
    Icon: MdEmail,
    link: 'mailto:support@miraplay.cloud',
  },
  {
    title: '02142 м.Київ вул.Лариси Руденко 6А оф.534',
    Icon: IoLocationSharp,
    link: 'https://goo.gl/maps/9MpDrbtuJ5QrM5oH8',
  },
  { title: 'Скачати клієнт', Icon: AiFillWindows, link: '#' },
];

export const socials = [
  {
    Icon: FaYoutube,
    link: 'https://www.youtube.com/channel/UCBvP_Kl4r61yuBkhB2hC97Q/about',
  },
  {
    Icon: FaFacebookF,
    link: 'https://www.youtube.com/channel/UCBvP_Kl4r61yuBkhB2hC97Q/about',
  },
  {
    Icon: FaInstagram,
    link: 'https://www.instagram.com/miraplaycloudgame/',
  },
];
