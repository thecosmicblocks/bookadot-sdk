import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BookadotPropert
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const bookadotPropertAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_id', internalType: 'uint256', type: 'uint256' },
      { name: '_config', internalType: 'address', type: 'address' },
      { name: '_factory', internalType: 'address', type: 'address' },
      { name: '_host', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'delegate', internalType: 'address', type: 'address' }],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_params',
        internalType: 'struct BookingParameters',
        type: 'tuple',
        components: [
          { name: 'token', internalType: 'address', type: 'address' },
          { name: 'bookingId', internalType: 'string', type: 'string' },
          {
            name: 'checkInTimestamp',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'checkOutTimestamp',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'bookingExpirationTimestamp',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'bookingAmount', internalType: 'uint256', type: 'uint256' },
          {
            name: 'cancellationPolicies',
            internalType: 'struct CancellationPolicy[]',
            type: 'tuple[]',
            components: [
              { name: 'expiryTime', internalType: 'uint256', type: 'uint256' },
              {
                name: 'refundAmount',
                internalType: 'uint256',
                type: 'uint256',
              },
            ],
          },
        ],
      },
      { name: '_signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'book',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_startIndex', internalType: 'uint256', type: 'uint256' },
      { name: '_pageSize', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'bookingHistory',
    outputs: [
      {
        name: '',
        internalType: 'struct Booking[]',
        type: 'tuple[]',
        components: [
          { name: 'id', internalType: 'string', type: 'string' },
          {
            name: 'checkInTimestamp',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'checkOutTimestamp',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'balance', internalType: 'uint256', type: 'uint256' },
          { name: 'ticketId', internalType: 'uint256', type: 'uint256' },
          { name: 'guest', internalType: 'address', type: 'address' },
          { name: 'token', internalType: 'address', type: 'address' },
          { name: 'status', internalType: 'enum BookingStatus', type: 'uint8' },
          {
            name: 'cancellationPolicies',
            internalType: 'struct CancellationPolicy[]',
            type: 'tuple[]',
            components: [
              { name: 'expiryTime', internalType: 'uint256', type: 'uint256' },
              {
                name: 'refundAmount',
                internalType: 'uint256',
                type: 'uint256',
              },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'bookings',
    outputs: [
      { name: 'id', internalType: 'string', type: 'string' },
      { name: 'checkInTimestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'checkOutTimestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'ticketId', internalType: 'uint256', type: 'uint256' },
      { name: 'guest', internalType: 'address', type: 'address' },
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'status', internalType: 'enum BookingStatus', type: 'uint8' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'string', type: 'string' }],
    name: 'bookingsMap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_bookingId', internalType: 'string', type: 'string' }],
    name: 'cancel',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_bookingId', internalType: 'string', type: 'string' }],
    name: 'cancelByHost',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_bookingId', internalType: 'string', type: 'string' }],
    name: 'getBooking',
    outputs: [
      {
        name: '',
        internalType: 'struct Booking',
        type: 'tuple',
        components: [
          { name: 'id', internalType: 'string', type: 'string' },
          {
            name: 'checkInTimestamp',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'checkOutTimestamp',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'balance', internalType: 'uint256', type: 'uint256' },
          { name: 'ticketId', internalType: 'uint256', type: 'uint256' },
          { name: 'guest', internalType: 'address', type: 'address' },
          { name: 'token', internalType: 'address', type: 'address' },
          { name: 'status', internalType: 'enum BookingStatus', type: 'uint8' },
          {
            name: 'cancellationPolicies',
            internalType: 'struct CancellationPolicy[]',
            type: 'tuple[]',
            components: [
              { name: 'expiryTime', internalType: 'uint256', type: 'uint256' },
              {
                name: 'refundAmount',
                internalType: 'uint256',
                type: 'uint256',
              },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_bookingId', internalType: 'string', type: 'string' }],
    name: 'getBookingIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'hostDelegates',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'id',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_bookingId', internalType: 'string', type: 'string' }],
    name: 'payout',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'delegate', internalType: 'address', type: 'address' }],
    name: 'revoke',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_ticket', internalType: 'address', type: 'address' }],
    name: 'setTicketAddress',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalBooking',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bookadotPropertAbi}__
 */
export const useReadBookadotPropert = /*#__PURE__*/ createUseReadContract({
  abi: bookadotPropertAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bookadotPropertAbi}__ and `functionName` set to `"bookingHistory"`
 */
export const useReadBookadotPropertBookingHistory =
  /*#__PURE__*/ createUseReadContract({
    abi: bookadotPropertAbi,
    functionName: 'bookingHistory',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bookadotPropertAbi}__ and `functionName` set to `"bookings"`
 */
export const useReadBookadotPropertBookings =
  /*#__PURE__*/ createUseReadContract({
    abi: bookadotPropertAbi,
    functionName: 'bookings',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bookadotPropertAbi}__ and `functionName` set to `"bookingsMap"`
 */
export const useReadBookadotPropertBookingsMap =
  /*#__PURE__*/ createUseReadContract({
    abi: bookadotPropertAbi,
    functionName: 'bookingsMap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bookadotPropertAbi}__ and `functionName` set to `"getBooking"`
 */
export const useReadBookadotPropertGetBooking =
  /*#__PURE__*/ createUseReadContract({
    abi: bookadotPropertAbi,
    functionName: 'getBooking',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bookadotPropertAbi}__ and `functionName` set to `"getBookingIndex"`
 */
export const useReadBookadotPropertGetBookingIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: bookadotPropertAbi,
    functionName: 'getBookingIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bookadotPropertAbi}__ and `functionName` set to `"hostDelegates"`
 */
export const useReadBookadotPropertHostDelegates =
  /*#__PURE__*/ createUseReadContract({
    abi: bookadotPropertAbi,
    functionName: 'hostDelegates',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bookadotPropertAbi}__ and `functionName` set to `"id"`
 */
export const useReadBookadotPropertId = /*#__PURE__*/ createUseReadContract({
  abi: bookadotPropertAbi,
  functionName: 'id',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bookadotPropertAbi}__ and `functionName` set to `"totalBooking"`
 */
export const useReadBookadotPropertTotalBooking =
  /*#__PURE__*/ createUseReadContract({
    abi: bookadotPropertAbi,
    functionName: 'totalBooking',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bookadotPropertAbi}__
 */
export const useWriteBookadotPropert = /*#__PURE__*/ createUseWriteContract({
  abi: bookadotPropertAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bookadotPropertAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteBookadotPropertApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: bookadotPropertAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bookadotPropertAbi}__ and `functionName` set to `"book"`
 */
export const useWriteBookadotPropertBook = /*#__PURE__*/ createUseWriteContract(
  { abi: bookadotPropertAbi, functionName: 'book' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bookadotPropertAbi}__ and `functionName` set to `"cancel"`
 */
export const useWriteBookadotPropertCancel =
  /*#__PURE__*/ createUseWriteContract({
    abi: bookadotPropertAbi,
    functionName: 'cancel',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bookadotPropertAbi}__ and `functionName` set to `"cancelByHost"`
 */
export const useWriteBookadotPropertCancelByHost =
  /*#__PURE__*/ createUseWriteContract({
    abi: bookadotPropertAbi,
    functionName: 'cancelByHost',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bookadotPropertAbi}__ and `functionName` set to `"payout"`
 */
export const useWriteBookadotPropertPayout =
  /*#__PURE__*/ createUseWriteContract({
    abi: bookadotPropertAbi,
    functionName: 'payout',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bookadotPropertAbi}__ and `functionName` set to `"revoke"`
 */
export const useWriteBookadotPropertRevoke =
  /*#__PURE__*/ createUseWriteContract({
    abi: bookadotPropertAbi,
    functionName: 'revoke',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bookadotPropertAbi}__ and `functionName` set to `"setTicketAddress"`
 */
export const useWriteBookadotPropertSetTicketAddress =
  /*#__PURE__*/ createUseWriteContract({
    abi: bookadotPropertAbi,
    functionName: 'setTicketAddress',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bookadotPropertAbi}__
 */
export const useSimulateBookadotPropert =
  /*#__PURE__*/ createUseSimulateContract({ abi: bookadotPropertAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bookadotPropertAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateBookadotPropertApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bookadotPropertAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bookadotPropertAbi}__ and `functionName` set to `"book"`
 */
export const useSimulateBookadotPropertBook =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bookadotPropertAbi,
    functionName: 'book',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bookadotPropertAbi}__ and `functionName` set to `"cancel"`
 */
export const useSimulateBookadotPropertCancel =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bookadotPropertAbi,
    functionName: 'cancel',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bookadotPropertAbi}__ and `functionName` set to `"cancelByHost"`
 */
export const useSimulateBookadotPropertCancelByHost =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bookadotPropertAbi,
    functionName: 'cancelByHost',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bookadotPropertAbi}__ and `functionName` set to `"payout"`
 */
export const useSimulateBookadotPropertPayout =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bookadotPropertAbi,
    functionName: 'payout',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bookadotPropertAbi}__ and `functionName` set to `"revoke"`
 */
export const useSimulateBookadotPropertRevoke =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bookadotPropertAbi,
    functionName: 'revoke',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bookadotPropertAbi}__ and `functionName` set to `"setTicketAddress"`
 */
export const useSimulateBookadotPropertSetTicketAddress =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bookadotPropertAbi,
    functionName: 'setTicketAddress',
  })
