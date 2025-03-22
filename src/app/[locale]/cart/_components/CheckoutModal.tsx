import { useCart } from '@context/CartContext';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { toast } from 'react-toastify';

interface CheckoutModalProps {
  showCheckoutModal: boolean;
  setShowCheckoutModal: (value: boolean) => void;
}

export default function CheckoutModal({
  showCheckoutModal,
  setShowCheckoutModal,
}: CheckoutModalProps) {
  const { clearCart } = useCart();

  const t = useTranslations('cart');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');

  const handleOrderSubmit = () => {
    if (!location.trim()) {
      toast.error(t('locationRequired'));
      return;
    }

    // Simulate order submission
    toast.success(t('orderSuccess'));
    clearCart(true);
    setShowCheckoutModal(false);
    setLocation('');
    setNotes('');
  };

  return (
    <Dialog
      open={showCheckoutModal}
      onClose={() => setShowCheckoutModal(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
          <DialogTitle className="mb-6 text-2xl font-bold text-gray-900">
            {t('checkout')}
          </DialogTitle>

          <div className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                {t('location')}
              </label>
              <textarea
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-lg border border-gray-200 p-3 focus:border-amber-500 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                rows={3}
                placeholder={t('locationPlaceholder')}
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">{t('notes')}</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full rounded-lg border border-gray-200 p-3 focus:border-amber-500 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                rows={2}
                placeholder={t('notesPlaceholder')}
              />
            </div>
          </div>

          <div className="mt-8 flex justify-end gap-3">
            <button
              onClick={() => setShowCheckoutModal(false)}
              name="back"
              className="cursor-pointer rounded-lg px-6 py-2 text-gray-600 hover:bg-gray-50"
            >
              {t('back')}
            </button>
            <button
              onClick={handleOrderSubmit}
              name="submit"
              className="cursor-pointer rounded-lg bg-amber-600 px-6 py-2 text-white hover:bg-amber-700"
            >
              {t('submitOrder')}
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
