import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { profileData } from '../../data/portfolioData';
import { useCardTilt } from '../../hooks/useCardTilt';

interface ProfilePhotoCardProps {
  isFlooded: boolean;
}

interface CardFaceProps {
  isBack?: boolean;
  imageSrc: string;
  imageAlt: string;
  actionText: string;
  idText: string;
  isHidden: boolean;
  onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
}

const CardFace: React.FC<CardFaceProps> = ({
  isBack = false,
  imageSrc,
  imageAlt,
  actionText,
  idText,
  isHidden,
  onError,
}) => {
  return (
    <div
      aria-hidden={isHidden}
      style={{
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        ...(isBack ? { transform: 'rotateY(180deg)' } : {}),
      }}
      className={`${
        isBack ? 'absolute inset-0' : 'relative'
      } w-full rounded-[32px] p-3.5 bg-[#fffdf5] border border-[#e8dbc0] shadow-2xl shadow-[#8c6239]/8`}
    >
      <div className="relative aspect-[3/4] w-full rounded-[24px] overflow-hidden bg-[#faeed1] border border-[#e2d3b3] flex items-center justify-center">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          onError={onError}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/75 via-transparent to-transparent opacity-65 pointer-events-none" />

        <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#fffdf5]/90 border border-[#e8dbc0] backdrop-blur-md shadow-sm">
          <div className="text-sm font-bold text-[#0f172a]">
            {profileData.name}
          </div>
          <div className="text-xs text-[#8c6239] font-mono mt-0.5">
            {profileData.education}
          </div>
        </div>
      </div>

      <div className="mt-3 px-2 flex items-center justify-between text-[11px] font-mono text-[#8c6239]">
        <span>{actionText}</span>
        <span>{idText}</span>
      </div>
    </div>
  );
};

export const ProfilePhotoCard: React.FC<ProfilePhotoCardProps> = ({ isFlooded }) => {
  const { tiltProps } = useCardTilt(6);
  const [flipped, setFlipped] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 640 : false;

  const handleFlip = () => {
    setFlipped((prev) => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleFlip();
    }
  };

  return (
    <motion.div
      animate={
        isFlooded
          ? {
              rotate: isMobile ? -5 : -24,
              x: isMobile ? 0 : -32,
              y: isMobile ? 20 : 70,
              scale: isMobile ? 0.98 : 0.94,
              transition: { type: 'spring', stiffness: 160, damping: 16 }
            }
          : {
              rotate: 0,
              x: 0,
              y: 0,
              scale: 1,
              transition: { type: 'spring', stiffness: 260, damping: 18 }
            }
      }
      className="relative w-full flex flex-col items-center lg:items-start gap-6"
    >
      <div
        {...tiltProps}
        role="button"
        tabIndex={0}
        aria-label="Balik kartu foto profil"
        onClick={handleFlip}
        onKeyDown={handleKeyDown}
        className="relative w-full max-w-sm group cursor-pointer focus:outline-none"
      >
        <div style={{ perspective: 1200 }} className="w-full">
          <motion.div
            style={{ transformStyle: 'preserve-3d' }}
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { type: 'spring', stiffness: 140, damping: 20 }
            }
            className="relative w-full"
          >
            {/* Front Face: User Photo */}
            <CardFace
              imageSrc={profileData.photoUrl || '/avatar.svg'}
              imageAlt={profileData.name}
              actionText="KLIK UNTUK MEMBALIK"
              idText="ID // NIZAR HASDIAN"
              isHidden={flipped}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = profileData.avatarUrl || '/avatar.svg';
              }}
            />

            {/* Back Face: Developer Avatar */}
            <CardFace
              isBack
              imageSrc={profileData.avatarUrl || '/avatar.svg'}
              imageAlt="Avatar developer"
              actionText="KLIK UNTUK KEMBALI"
              idText="ID // NIZAR HASDIAN"
              isHidden={!flipped}
            />
          </motion.div>
        </div>
      </div>

      {/* Location & Operating Environment */}
      <motion.div
        animate={isFlooded ? { rotate: 12, x: 24, y: 30 } : { rotate: 0, x: 0, y: 0 }}
        className="w-full max-w-sm p-4 rounded-2xl bg-[#fffdf5] border border-[#e8dbc0] flex items-center justify-between text-xs font-mono text-[#0f172a] shadow-sm"
      >
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#8c6239]" />
          <span>Indonesia</span>
        </div>
        <span className="text-[#0284c7] font-bold">Open to internship &amp; entry-level</span>
      </motion.div>
    </motion.div>
  );
};
