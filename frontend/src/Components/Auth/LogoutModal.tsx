/** @format */
"use client"

import React, { Dispatch, SetStateAction } from "react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/Components/ui/alert-dialog"
import { signOut } from "next-auth/react"
import { motion, AnimatePresence } from "framer-motion"

export default function LogoutModal({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}) {
  const handleLogout = () => {
    signOut({ redirect: true, callbackUrl: "/login" })
  }

  const handleCancel = () => {
    setOpen(false)
  }

  return (
    <AnimatePresence>
      {open && (
        <AlertDialog open={open} onOpenChange={setOpen}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50">
            <motion.div
              key="modal"
              initial={{ y: 20, opacity: 0, scale: 0.95 }}
              animate={{
                y: 0,
                opacity: 1,
                scale: 1,
                transition: {
                  type: "spring",
                  damping: 25,
                  stiffness: 300,
                  delay: 0.1,
                },
              }}
              exit={{
                y: -20,
                opacity: 0,
                scale: 0.95,
                transition: {
                  duration: 0.4,
                  ease: "easeInOut",
                },
              }}>
              <AlertDialogContent className="border-0 shadow-xl">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-xl font-bold text-gray-900 dark:text-white">
                    Ready to sign out?
                  </AlertDialogTitle>
                  <AlertDialogDescription className="text-gray-600 dark:text-gray-300">
                    You're about to end your current session. Don't worry - your
                    data is safe and sound! You'll need to sign in again to
                    access your dashboard and financial insights.
                  </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                  <AlertDialogCancel asChild>
                    <motion.button
                      onClick={handleCancel}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-6 py-2 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 rounded-lg transition-all duration-200 hover:shadow-sm">
                      Stay Signed In
                    </motion.button>
                  </AlertDialogCancel>
                  <AlertDialogAction asChild>
                    <motion.button
                      onClick={handleLogout}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-6 py-2 bg-gradient-to-r from-red-500 to-rose-600 text-white rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-red-100 hover:from-red-600 hover:to-rose-700">
                      Yes, Sign Me Out
                    </motion.button>
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </motion.div>
          </motion.div>
        </AlertDialog>
      )}
    </AnimatePresence>
  )
}
