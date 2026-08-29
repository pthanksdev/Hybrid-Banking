
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model CustodyWallet
 * 
 */
export type CustodyWallet = $Result.DefaultSelection<Prisma.$CustodyWalletPayload>
/**
 * Model WalletSignatureLog
 * 
 */
export type WalletSignatureLog = $Result.DefaultSelection<Prisma.$WalletSignatureLogPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CustodyWallets
 * const custodyWallets = await prisma.custodyWallet.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more CustodyWallets
   * const custodyWallets = await prisma.custodyWallet.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.custodyWallet`: Exposes CRUD operations for the **CustodyWallet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustodyWallets
    * const custodyWallets = await prisma.custodyWallet.findMany()
    * ```
    */
  get custodyWallet(): Prisma.CustodyWalletDelegate<ExtArgs>;

  /**
   * `prisma.walletSignatureLog`: Exposes CRUD operations for the **WalletSignatureLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WalletSignatureLogs
    * const walletSignatureLogs = await prisma.walletSignatureLog.findMany()
    * ```
    */
  get walletSignatureLog(): Prisma.WalletSignatureLogDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    CustodyWallet: 'CustodyWallet',
    WalletSignatureLog: 'WalletSignatureLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "custodyWallet" | "walletSignatureLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CustodyWallet: {
        payload: Prisma.$CustodyWalletPayload<ExtArgs>
        fields: Prisma.CustodyWalletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustodyWalletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustodyWalletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustodyWalletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustodyWalletPayload>
          }
          findFirst: {
            args: Prisma.CustodyWalletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustodyWalletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustodyWalletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustodyWalletPayload>
          }
          findMany: {
            args: Prisma.CustodyWalletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustodyWalletPayload>[]
          }
          create: {
            args: Prisma.CustodyWalletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustodyWalletPayload>
          }
          createMany: {
            args: Prisma.CustodyWalletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustodyWalletCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustodyWalletPayload>[]
          }
          delete: {
            args: Prisma.CustodyWalletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustodyWalletPayload>
          }
          update: {
            args: Prisma.CustodyWalletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustodyWalletPayload>
          }
          deleteMany: {
            args: Prisma.CustodyWalletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustodyWalletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustodyWalletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustodyWalletPayload>
          }
          aggregate: {
            args: Prisma.CustodyWalletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustodyWallet>
          }
          groupBy: {
            args: Prisma.CustodyWalletGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustodyWalletGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustodyWalletCountArgs<ExtArgs>
            result: $Utils.Optional<CustodyWalletCountAggregateOutputType> | number
          }
        }
      }
      WalletSignatureLog: {
        payload: Prisma.$WalletSignatureLogPayload<ExtArgs>
        fields: Prisma.WalletSignatureLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WalletSignatureLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletSignatureLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WalletSignatureLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletSignatureLogPayload>
          }
          findFirst: {
            args: Prisma.WalletSignatureLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletSignatureLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WalletSignatureLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletSignatureLogPayload>
          }
          findMany: {
            args: Prisma.WalletSignatureLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletSignatureLogPayload>[]
          }
          create: {
            args: Prisma.WalletSignatureLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletSignatureLogPayload>
          }
          createMany: {
            args: Prisma.WalletSignatureLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WalletSignatureLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletSignatureLogPayload>[]
          }
          delete: {
            args: Prisma.WalletSignatureLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletSignatureLogPayload>
          }
          update: {
            args: Prisma.WalletSignatureLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletSignatureLogPayload>
          }
          deleteMany: {
            args: Prisma.WalletSignatureLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WalletSignatureLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WalletSignatureLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletSignatureLogPayload>
          }
          aggregate: {
            args: Prisma.WalletSignatureLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWalletSignatureLog>
          }
          groupBy: {
            args: Prisma.WalletSignatureLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalletSignatureLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.WalletSignatureLogCountArgs<ExtArgs>
            result: $Utils.Optional<WalletSignatureLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model CustodyWallet
   */

  export type AggregateCustodyWallet = {
    _count: CustodyWalletCountAggregateOutputType | null
    _min: CustodyWalletMinAggregateOutputType | null
    _max: CustodyWalletMaxAggregateOutputType | null
  }

  export type CustodyWalletMinAggregateOutputType = {
    id: string | null
    userId: string | null
    chain: string | null
    address: string | null
    keyRef: string | null
    ledgerAccountId: string | null
    createdAt: Date | null
  }

  export type CustodyWalletMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    chain: string | null
    address: string | null
    keyRef: string | null
    ledgerAccountId: string | null
    createdAt: Date | null
  }

  export type CustodyWalletCountAggregateOutputType = {
    id: number
    userId: number
    chain: number
    address: number
    keyRef: number
    ledgerAccountId: number
    createdAt: number
    _all: number
  }


  export type CustodyWalletMinAggregateInputType = {
    id?: true
    userId?: true
    chain?: true
    address?: true
    keyRef?: true
    ledgerAccountId?: true
    createdAt?: true
  }

  export type CustodyWalletMaxAggregateInputType = {
    id?: true
    userId?: true
    chain?: true
    address?: true
    keyRef?: true
    ledgerAccountId?: true
    createdAt?: true
  }

  export type CustodyWalletCountAggregateInputType = {
    id?: true
    userId?: true
    chain?: true
    address?: true
    keyRef?: true
    ledgerAccountId?: true
    createdAt?: true
    _all?: true
  }

  export type CustodyWalletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustodyWallet to aggregate.
     */
    where?: CustodyWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustodyWallets to fetch.
     */
    orderBy?: CustodyWalletOrderByWithRelationInput | CustodyWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustodyWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustodyWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustodyWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustodyWallets
    **/
    _count?: true | CustodyWalletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustodyWalletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustodyWalletMaxAggregateInputType
  }

  export type GetCustodyWalletAggregateType<T extends CustodyWalletAggregateArgs> = {
        [P in keyof T & keyof AggregateCustodyWallet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustodyWallet[P]>
      : GetScalarType<T[P], AggregateCustodyWallet[P]>
  }




  export type CustodyWalletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustodyWalletWhereInput
    orderBy?: CustodyWalletOrderByWithAggregationInput | CustodyWalletOrderByWithAggregationInput[]
    by: CustodyWalletScalarFieldEnum[] | CustodyWalletScalarFieldEnum
    having?: CustodyWalletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustodyWalletCountAggregateInputType | true
    _min?: CustodyWalletMinAggregateInputType
    _max?: CustodyWalletMaxAggregateInputType
  }

  export type CustodyWalletGroupByOutputType = {
    id: string
    userId: string
    chain: string
    address: string
    keyRef: string
    ledgerAccountId: string
    createdAt: Date
    _count: CustodyWalletCountAggregateOutputType | null
    _min: CustodyWalletMinAggregateOutputType | null
    _max: CustodyWalletMaxAggregateOutputType | null
  }

  type GetCustodyWalletGroupByPayload<T extends CustodyWalletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustodyWalletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustodyWalletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustodyWalletGroupByOutputType[P]>
            : GetScalarType<T[P], CustodyWalletGroupByOutputType[P]>
        }
      >
    >


  export type CustodyWalletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    chain?: boolean
    address?: boolean
    keyRef?: boolean
    ledgerAccountId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["custodyWallet"]>

  export type CustodyWalletSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    chain?: boolean
    address?: boolean
    keyRef?: boolean
    ledgerAccountId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["custodyWallet"]>

  export type CustodyWalletSelectScalar = {
    id?: boolean
    userId?: boolean
    chain?: boolean
    address?: boolean
    keyRef?: boolean
    ledgerAccountId?: boolean
    createdAt?: boolean
  }


  export type $CustodyWalletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustodyWallet"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      chain: string
      address: string
      keyRef: string
      ledgerAccountId: string
      createdAt: Date
    }, ExtArgs["result"]["custodyWallet"]>
    composites: {}
  }

  type CustodyWalletGetPayload<S extends boolean | null | undefined | CustodyWalletDefaultArgs> = $Result.GetResult<Prisma.$CustodyWalletPayload, S>

  type CustodyWalletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustodyWalletFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustodyWalletCountAggregateInputType | true
    }

  export interface CustodyWalletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustodyWallet'], meta: { name: 'CustodyWallet' } }
    /**
     * Find zero or one CustodyWallet that matches the filter.
     * @param {CustodyWalletFindUniqueArgs} args - Arguments to find a CustodyWallet
     * @example
     * // Get one CustodyWallet
     * const custodyWallet = await prisma.custodyWallet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustodyWalletFindUniqueArgs>(args: SelectSubset<T, CustodyWalletFindUniqueArgs<ExtArgs>>): Prisma__CustodyWalletClient<$Result.GetResult<Prisma.$CustodyWalletPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CustodyWallet that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CustodyWalletFindUniqueOrThrowArgs} args - Arguments to find a CustodyWallet
     * @example
     * // Get one CustodyWallet
     * const custodyWallet = await prisma.custodyWallet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustodyWalletFindUniqueOrThrowArgs>(args: SelectSubset<T, CustodyWalletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustodyWalletClient<$Result.GetResult<Prisma.$CustodyWalletPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CustodyWallet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustodyWalletFindFirstArgs} args - Arguments to find a CustodyWallet
     * @example
     * // Get one CustodyWallet
     * const custodyWallet = await prisma.custodyWallet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustodyWalletFindFirstArgs>(args?: SelectSubset<T, CustodyWalletFindFirstArgs<ExtArgs>>): Prisma__CustodyWalletClient<$Result.GetResult<Prisma.$CustodyWalletPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CustodyWallet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustodyWalletFindFirstOrThrowArgs} args - Arguments to find a CustodyWallet
     * @example
     * // Get one CustodyWallet
     * const custodyWallet = await prisma.custodyWallet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustodyWalletFindFirstOrThrowArgs>(args?: SelectSubset<T, CustodyWalletFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustodyWalletClient<$Result.GetResult<Prisma.$CustodyWalletPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CustodyWallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustodyWalletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustodyWallets
     * const custodyWallets = await prisma.custodyWallet.findMany()
     * 
     * // Get first 10 CustodyWallets
     * const custodyWallets = await prisma.custodyWallet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const custodyWalletWithIdOnly = await prisma.custodyWallet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustodyWalletFindManyArgs>(args?: SelectSubset<T, CustodyWalletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustodyWalletPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CustodyWallet.
     * @param {CustodyWalletCreateArgs} args - Arguments to create a CustodyWallet.
     * @example
     * // Create one CustodyWallet
     * const CustodyWallet = await prisma.custodyWallet.create({
     *   data: {
     *     // ... data to create a CustodyWallet
     *   }
     * })
     * 
     */
    create<T extends CustodyWalletCreateArgs>(args: SelectSubset<T, CustodyWalletCreateArgs<ExtArgs>>): Prisma__CustodyWalletClient<$Result.GetResult<Prisma.$CustodyWalletPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CustodyWallets.
     * @param {CustodyWalletCreateManyArgs} args - Arguments to create many CustodyWallets.
     * @example
     * // Create many CustodyWallets
     * const custodyWallet = await prisma.custodyWallet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustodyWalletCreateManyArgs>(args?: SelectSubset<T, CustodyWalletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustodyWallets and returns the data saved in the database.
     * @param {CustodyWalletCreateManyAndReturnArgs} args - Arguments to create many CustodyWallets.
     * @example
     * // Create many CustodyWallets
     * const custodyWallet = await prisma.custodyWallet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustodyWallets and only return the `id`
     * const custodyWalletWithIdOnly = await prisma.custodyWallet.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustodyWalletCreateManyAndReturnArgs>(args?: SelectSubset<T, CustodyWalletCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustodyWalletPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CustodyWallet.
     * @param {CustodyWalletDeleteArgs} args - Arguments to delete one CustodyWallet.
     * @example
     * // Delete one CustodyWallet
     * const CustodyWallet = await prisma.custodyWallet.delete({
     *   where: {
     *     // ... filter to delete one CustodyWallet
     *   }
     * })
     * 
     */
    delete<T extends CustodyWalletDeleteArgs>(args: SelectSubset<T, CustodyWalletDeleteArgs<ExtArgs>>): Prisma__CustodyWalletClient<$Result.GetResult<Prisma.$CustodyWalletPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CustodyWallet.
     * @param {CustodyWalletUpdateArgs} args - Arguments to update one CustodyWallet.
     * @example
     * // Update one CustodyWallet
     * const custodyWallet = await prisma.custodyWallet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustodyWalletUpdateArgs>(args: SelectSubset<T, CustodyWalletUpdateArgs<ExtArgs>>): Prisma__CustodyWalletClient<$Result.GetResult<Prisma.$CustodyWalletPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CustodyWallets.
     * @param {CustodyWalletDeleteManyArgs} args - Arguments to filter CustodyWallets to delete.
     * @example
     * // Delete a few CustodyWallets
     * const { count } = await prisma.custodyWallet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustodyWalletDeleteManyArgs>(args?: SelectSubset<T, CustodyWalletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustodyWallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustodyWalletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustodyWallets
     * const custodyWallet = await prisma.custodyWallet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustodyWalletUpdateManyArgs>(args: SelectSubset<T, CustodyWalletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CustodyWallet.
     * @param {CustodyWalletUpsertArgs} args - Arguments to update or create a CustodyWallet.
     * @example
     * // Update or create a CustodyWallet
     * const custodyWallet = await prisma.custodyWallet.upsert({
     *   create: {
     *     // ... data to create a CustodyWallet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustodyWallet we want to update
     *   }
     * })
     */
    upsert<T extends CustodyWalletUpsertArgs>(args: SelectSubset<T, CustodyWalletUpsertArgs<ExtArgs>>): Prisma__CustodyWalletClient<$Result.GetResult<Prisma.$CustodyWalletPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CustodyWallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustodyWalletCountArgs} args - Arguments to filter CustodyWallets to count.
     * @example
     * // Count the number of CustodyWallets
     * const count = await prisma.custodyWallet.count({
     *   where: {
     *     // ... the filter for the CustodyWallets we want to count
     *   }
     * })
    **/
    count<T extends CustodyWalletCountArgs>(
      args?: Subset<T, CustodyWalletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustodyWalletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustodyWallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustodyWalletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustodyWalletAggregateArgs>(args: Subset<T, CustodyWalletAggregateArgs>): Prisma.PrismaPromise<GetCustodyWalletAggregateType<T>>

    /**
     * Group by CustodyWallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustodyWalletGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustodyWalletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustodyWalletGroupByArgs['orderBy'] }
        : { orderBy?: CustodyWalletGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustodyWalletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustodyWalletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustodyWallet model
   */
  readonly fields: CustodyWalletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustodyWallet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustodyWalletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CustodyWallet model
   */ 
  interface CustodyWalletFieldRefs {
    readonly id: FieldRef<"CustodyWallet", 'String'>
    readonly userId: FieldRef<"CustodyWallet", 'String'>
    readonly chain: FieldRef<"CustodyWallet", 'String'>
    readonly address: FieldRef<"CustodyWallet", 'String'>
    readonly keyRef: FieldRef<"CustodyWallet", 'String'>
    readonly ledgerAccountId: FieldRef<"CustodyWallet", 'String'>
    readonly createdAt: FieldRef<"CustodyWallet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustodyWallet findUnique
   */
  export type CustodyWalletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustodyWallet
     */
    select?: CustodyWalletSelect<ExtArgs> | null
    /**
     * Filter, which CustodyWallet to fetch.
     */
    where: CustodyWalletWhereUniqueInput
  }

  /**
   * CustodyWallet findUniqueOrThrow
   */
  export type CustodyWalletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustodyWallet
     */
    select?: CustodyWalletSelect<ExtArgs> | null
    /**
     * Filter, which CustodyWallet to fetch.
     */
    where: CustodyWalletWhereUniqueInput
  }

  /**
   * CustodyWallet findFirst
   */
  export type CustodyWalletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustodyWallet
     */
    select?: CustodyWalletSelect<ExtArgs> | null
    /**
     * Filter, which CustodyWallet to fetch.
     */
    where?: CustodyWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustodyWallets to fetch.
     */
    orderBy?: CustodyWalletOrderByWithRelationInput | CustodyWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustodyWallets.
     */
    cursor?: CustodyWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustodyWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustodyWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustodyWallets.
     */
    distinct?: CustodyWalletScalarFieldEnum | CustodyWalletScalarFieldEnum[]
  }

  /**
   * CustodyWallet findFirstOrThrow
   */
  export type CustodyWalletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustodyWallet
     */
    select?: CustodyWalletSelect<ExtArgs> | null
    /**
     * Filter, which CustodyWallet to fetch.
     */
    where?: CustodyWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustodyWallets to fetch.
     */
    orderBy?: CustodyWalletOrderByWithRelationInput | CustodyWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustodyWallets.
     */
    cursor?: CustodyWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustodyWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustodyWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustodyWallets.
     */
    distinct?: CustodyWalletScalarFieldEnum | CustodyWalletScalarFieldEnum[]
  }

  /**
   * CustodyWallet findMany
   */
  export type CustodyWalletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustodyWallet
     */
    select?: CustodyWalletSelect<ExtArgs> | null
    /**
     * Filter, which CustodyWallets to fetch.
     */
    where?: CustodyWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustodyWallets to fetch.
     */
    orderBy?: CustodyWalletOrderByWithRelationInput | CustodyWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustodyWallets.
     */
    cursor?: CustodyWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustodyWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustodyWallets.
     */
    skip?: number
    distinct?: CustodyWalletScalarFieldEnum | CustodyWalletScalarFieldEnum[]
  }

  /**
   * CustodyWallet create
   */
  export type CustodyWalletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustodyWallet
     */
    select?: CustodyWalletSelect<ExtArgs> | null
    /**
     * The data needed to create a CustodyWallet.
     */
    data: XOR<CustodyWalletCreateInput, CustodyWalletUncheckedCreateInput>
  }

  /**
   * CustodyWallet createMany
   */
  export type CustodyWalletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustodyWallets.
     */
    data: CustodyWalletCreateManyInput | CustodyWalletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustodyWallet createManyAndReturn
   */
  export type CustodyWalletCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustodyWallet
     */
    select?: CustodyWalletSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CustodyWallets.
     */
    data: CustodyWalletCreateManyInput | CustodyWalletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustodyWallet update
   */
  export type CustodyWalletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustodyWallet
     */
    select?: CustodyWalletSelect<ExtArgs> | null
    /**
     * The data needed to update a CustodyWallet.
     */
    data: XOR<CustodyWalletUpdateInput, CustodyWalletUncheckedUpdateInput>
    /**
     * Choose, which CustodyWallet to update.
     */
    where: CustodyWalletWhereUniqueInput
  }

  /**
   * CustodyWallet updateMany
   */
  export type CustodyWalletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustodyWallets.
     */
    data: XOR<CustodyWalletUpdateManyMutationInput, CustodyWalletUncheckedUpdateManyInput>
    /**
     * Filter which CustodyWallets to update
     */
    where?: CustodyWalletWhereInput
  }

  /**
   * CustodyWallet upsert
   */
  export type CustodyWalletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustodyWallet
     */
    select?: CustodyWalletSelect<ExtArgs> | null
    /**
     * The filter to search for the CustodyWallet to update in case it exists.
     */
    where: CustodyWalletWhereUniqueInput
    /**
     * In case the CustodyWallet found by the `where` argument doesn't exist, create a new CustodyWallet with this data.
     */
    create: XOR<CustodyWalletCreateInput, CustodyWalletUncheckedCreateInput>
    /**
     * In case the CustodyWallet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustodyWalletUpdateInput, CustodyWalletUncheckedUpdateInput>
  }

  /**
   * CustodyWallet delete
   */
  export type CustodyWalletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustodyWallet
     */
    select?: CustodyWalletSelect<ExtArgs> | null
    /**
     * Filter which CustodyWallet to delete.
     */
    where: CustodyWalletWhereUniqueInput
  }

  /**
   * CustodyWallet deleteMany
   */
  export type CustodyWalletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustodyWallets to delete
     */
    where?: CustodyWalletWhereInput
  }

  /**
   * CustodyWallet without action
   */
  export type CustodyWalletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustodyWallet
     */
    select?: CustodyWalletSelect<ExtArgs> | null
  }


  /**
   * Model WalletSignatureLog
   */

  export type AggregateWalletSignatureLog = {
    _count: WalletSignatureLogCountAggregateOutputType | null
    _min: WalletSignatureLogMinAggregateOutputType | null
    _max: WalletSignatureLogMaxAggregateOutputType | null
  }

  export type WalletSignatureLogMinAggregateOutputType = {
    id: string | null
    walletId: string | null
    txHash: string | null
    status: string | null
    rawTx: string | null
    createdAt: Date | null
  }

  export type WalletSignatureLogMaxAggregateOutputType = {
    id: string | null
    walletId: string | null
    txHash: string | null
    status: string | null
    rawTx: string | null
    createdAt: Date | null
  }

  export type WalletSignatureLogCountAggregateOutputType = {
    id: number
    walletId: number
    txHash: number
    status: number
    rawTx: number
    createdAt: number
    _all: number
  }


  export type WalletSignatureLogMinAggregateInputType = {
    id?: true
    walletId?: true
    txHash?: true
    status?: true
    rawTx?: true
    createdAt?: true
  }

  export type WalletSignatureLogMaxAggregateInputType = {
    id?: true
    walletId?: true
    txHash?: true
    status?: true
    rawTx?: true
    createdAt?: true
  }

  export type WalletSignatureLogCountAggregateInputType = {
    id?: true
    walletId?: true
    txHash?: true
    status?: true
    rawTx?: true
    createdAt?: true
    _all?: true
  }

  export type WalletSignatureLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WalletSignatureLog to aggregate.
     */
    where?: WalletSignatureLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletSignatureLogs to fetch.
     */
    orderBy?: WalletSignatureLogOrderByWithRelationInput | WalletSignatureLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WalletSignatureLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletSignatureLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletSignatureLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WalletSignatureLogs
    **/
    _count?: true | WalletSignatureLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletSignatureLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletSignatureLogMaxAggregateInputType
  }

  export type GetWalletSignatureLogAggregateType<T extends WalletSignatureLogAggregateArgs> = {
        [P in keyof T & keyof AggregateWalletSignatureLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWalletSignatureLog[P]>
      : GetScalarType<T[P], AggregateWalletSignatureLog[P]>
  }




  export type WalletSignatureLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletSignatureLogWhereInput
    orderBy?: WalletSignatureLogOrderByWithAggregationInput | WalletSignatureLogOrderByWithAggregationInput[]
    by: WalletSignatureLogScalarFieldEnum[] | WalletSignatureLogScalarFieldEnum
    having?: WalletSignatureLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletSignatureLogCountAggregateInputType | true
    _min?: WalletSignatureLogMinAggregateInputType
    _max?: WalletSignatureLogMaxAggregateInputType
  }

  export type WalletSignatureLogGroupByOutputType = {
    id: string
    walletId: string
    txHash: string | null
    status: string
    rawTx: string | null
    createdAt: Date
    _count: WalletSignatureLogCountAggregateOutputType | null
    _min: WalletSignatureLogMinAggregateOutputType | null
    _max: WalletSignatureLogMaxAggregateOutputType | null
  }

  type GetWalletSignatureLogGroupByPayload<T extends WalletSignatureLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalletSignatureLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletSignatureLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletSignatureLogGroupByOutputType[P]>
            : GetScalarType<T[P], WalletSignatureLogGroupByOutputType[P]>
        }
      >
    >


  export type WalletSignatureLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletId?: boolean
    txHash?: boolean
    status?: boolean
    rawTx?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["walletSignatureLog"]>

  export type WalletSignatureLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletId?: boolean
    txHash?: boolean
    status?: boolean
    rawTx?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["walletSignatureLog"]>

  export type WalletSignatureLogSelectScalar = {
    id?: boolean
    walletId?: boolean
    txHash?: boolean
    status?: boolean
    rawTx?: boolean
    createdAt?: boolean
  }


  export type $WalletSignatureLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WalletSignatureLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      walletId: string
      txHash: string | null
      status: string
      rawTx: string | null
      createdAt: Date
    }, ExtArgs["result"]["walletSignatureLog"]>
    composites: {}
  }

  type WalletSignatureLogGetPayload<S extends boolean | null | undefined | WalletSignatureLogDefaultArgs> = $Result.GetResult<Prisma.$WalletSignatureLogPayload, S>

  type WalletSignatureLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WalletSignatureLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WalletSignatureLogCountAggregateInputType | true
    }

  export interface WalletSignatureLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WalletSignatureLog'], meta: { name: 'WalletSignatureLog' } }
    /**
     * Find zero or one WalletSignatureLog that matches the filter.
     * @param {WalletSignatureLogFindUniqueArgs} args - Arguments to find a WalletSignatureLog
     * @example
     * // Get one WalletSignatureLog
     * const walletSignatureLog = await prisma.walletSignatureLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WalletSignatureLogFindUniqueArgs>(args: SelectSubset<T, WalletSignatureLogFindUniqueArgs<ExtArgs>>): Prisma__WalletSignatureLogClient<$Result.GetResult<Prisma.$WalletSignatureLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WalletSignatureLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WalletSignatureLogFindUniqueOrThrowArgs} args - Arguments to find a WalletSignatureLog
     * @example
     * // Get one WalletSignatureLog
     * const walletSignatureLog = await prisma.walletSignatureLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WalletSignatureLogFindUniqueOrThrowArgs>(args: SelectSubset<T, WalletSignatureLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WalletSignatureLogClient<$Result.GetResult<Prisma.$WalletSignatureLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WalletSignatureLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletSignatureLogFindFirstArgs} args - Arguments to find a WalletSignatureLog
     * @example
     * // Get one WalletSignatureLog
     * const walletSignatureLog = await prisma.walletSignatureLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WalletSignatureLogFindFirstArgs>(args?: SelectSubset<T, WalletSignatureLogFindFirstArgs<ExtArgs>>): Prisma__WalletSignatureLogClient<$Result.GetResult<Prisma.$WalletSignatureLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WalletSignatureLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletSignatureLogFindFirstOrThrowArgs} args - Arguments to find a WalletSignatureLog
     * @example
     * // Get one WalletSignatureLog
     * const walletSignatureLog = await prisma.walletSignatureLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WalletSignatureLogFindFirstOrThrowArgs>(args?: SelectSubset<T, WalletSignatureLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__WalletSignatureLogClient<$Result.GetResult<Prisma.$WalletSignatureLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WalletSignatureLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletSignatureLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WalletSignatureLogs
     * const walletSignatureLogs = await prisma.walletSignatureLog.findMany()
     * 
     * // Get first 10 WalletSignatureLogs
     * const walletSignatureLogs = await prisma.walletSignatureLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const walletSignatureLogWithIdOnly = await prisma.walletSignatureLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WalletSignatureLogFindManyArgs>(args?: SelectSubset<T, WalletSignatureLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletSignatureLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WalletSignatureLog.
     * @param {WalletSignatureLogCreateArgs} args - Arguments to create a WalletSignatureLog.
     * @example
     * // Create one WalletSignatureLog
     * const WalletSignatureLog = await prisma.walletSignatureLog.create({
     *   data: {
     *     // ... data to create a WalletSignatureLog
     *   }
     * })
     * 
     */
    create<T extends WalletSignatureLogCreateArgs>(args: SelectSubset<T, WalletSignatureLogCreateArgs<ExtArgs>>): Prisma__WalletSignatureLogClient<$Result.GetResult<Prisma.$WalletSignatureLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WalletSignatureLogs.
     * @param {WalletSignatureLogCreateManyArgs} args - Arguments to create many WalletSignatureLogs.
     * @example
     * // Create many WalletSignatureLogs
     * const walletSignatureLog = await prisma.walletSignatureLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WalletSignatureLogCreateManyArgs>(args?: SelectSubset<T, WalletSignatureLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WalletSignatureLogs and returns the data saved in the database.
     * @param {WalletSignatureLogCreateManyAndReturnArgs} args - Arguments to create many WalletSignatureLogs.
     * @example
     * // Create many WalletSignatureLogs
     * const walletSignatureLog = await prisma.walletSignatureLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WalletSignatureLogs and only return the `id`
     * const walletSignatureLogWithIdOnly = await prisma.walletSignatureLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WalletSignatureLogCreateManyAndReturnArgs>(args?: SelectSubset<T, WalletSignatureLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletSignatureLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WalletSignatureLog.
     * @param {WalletSignatureLogDeleteArgs} args - Arguments to delete one WalletSignatureLog.
     * @example
     * // Delete one WalletSignatureLog
     * const WalletSignatureLog = await prisma.walletSignatureLog.delete({
     *   where: {
     *     // ... filter to delete one WalletSignatureLog
     *   }
     * })
     * 
     */
    delete<T extends WalletSignatureLogDeleteArgs>(args: SelectSubset<T, WalletSignatureLogDeleteArgs<ExtArgs>>): Prisma__WalletSignatureLogClient<$Result.GetResult<Prisma.$WalletSignatureLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WalletSignatureLog.
     * @param {WalletSignatureLogUpdateArgs} args - Arguments to update one WalletSignatureLog.
     * @example
     * // Update one WalletSignatureLog
     * const walletSignatureLog = await prisma.walletSignatureLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WalletSignatureLogUpdateArgs>(args: SelectSubset<T, WalletSignatureLogUpdateArgs<ExtArgs>>): Prisma__WalletSignatureLogClient<$Result.GetResult<Prisma.$WalletSignatureLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WalletSignatureLogs.
     * @param {WalletSignatureLogDeleteManyArgs} args - Arguments to filter WalletSignatureLogs to delete.
     * @example
     * // Delete a few WalletSignatureLogs
     * const { count } = await prisma.walletSignatureLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WalletSignatureLogDeleteManyArgs>(args?: SelectSubset<T, WalletSignatureLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WalletSignatureLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletSignatureLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WalletSignatureLogs
     * const walletSignatureLog = await prisma.walletSignatureLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WalletSignatureLogUpdateManyArgs>(args: SelectSubset<T, WalletSignatureLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WalletSignatureLog.
     * @param {WalletSignatureLogUpsertArgs} args - Arguments to update or create a WalletSignatureLog.
     * @example
     * // Update or create a WalletSignatureLog
     * const walletSignatureLog = await prisma.walletSignatureLog.upsert({
     *   create: {
     *     // ... data to create a WalletSignatureLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WalletSignatureLog we want to update
     *   }
     * })
     */
    upsert<T extends WalletSignatureLogUpsertArgs>(args: SelectSubset<T, WalletSignatureLogUpsertArgs<ExtArgs>>): Prisma__WalletSignatureLogClient<$Result.GetResult<Prisma.$WalletSignatureLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WalletSignatureLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletSignatureLogCountArgs} args - Arguments to filter WalletSignatureLogs to count.
     * @example
     * // Count the number of WalletSignatureLogs
     * const count = await prisma.walletSignatureLog.count({
     *   where: {
     *     // ... the filter for the WalletSignatureLogs we want to count
     *   }
     * })
    **/
    count<T extends WalletSignatureLogCountArgs>(
      args?: Subset<T, WalletSignatureLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletSignatureLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WalletSignatureLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletSignatureLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WalletSignatureLogAggregateArgs>(args: Subset<T, WalletSignatureLogAggregateArgs>): Prisma.PrismaPromise<GetWalletSignatureLogAggregateType<T>>

    /**
     * Group by WalletSignatureLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletSignatureLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WalletSignatureLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalletSignatureLogGroupByArgs['orderBy'] }
        : { orderBy?: WalletSignatureLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WalletSignatureLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletSignatureLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WalletSignatureLog model
   */
  readonly fields: WalletSignatureLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WalletSignatureLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WalletSignatureLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WalletSignatureLog model
   */ 
  interface WalletSignatureLogFieldRefs {
    readonly id: FieldRef<"WalletSignatureLog", 'String'>
    readonly walletId: FieldRef<"WalletSignatureLog", 'String'>
    readonly txHash: FieldRef<"WalletSignatureLog", 'String'>
    readonly status: FieldRef<"WalletSignatureLog", 'String'>
    readonly rawTx: FieldRef<"WalletSignatureLog", 'String'>
    readonly createdAt: FieldRef<"WalletSignatureLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WalletSignatureLog findUnique
   */
  export type WalletSignatureLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletSignatureLog
     */
    select?: WalletSignatureLogSelect<ExtArgs> | null
    /**
     * Filter, which WalletSignatureLog to fetch.
     */
    where: WalletSignatureLogWhereUniqueInput
  }

  /**
   * WalletSignatureLog findUniqueOrThrow
   */
  export type WalletSignatureLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletSignatureLog
     */
    select?: WalletSignatureLogSelect<ExtArgs> | null
    /**
     * Filter, which WalletSignatureLog to fetch.
     */
    where: WalletSignatureLogWhereUniqueInput
  }

  /**
   * WalletSignatureLog findFirst
   */
  export type WalletSignatureLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletSignatureLog
     */
    select?: WalletSignatureLogSelect<ExtArgs> | null
    /**
     * Filter, which WalletSignatureLog to fetch.
     */
    where?: WalletSignatureLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletSignatureLogs to fetch.
     */
    orderBy?: WalletSignatureLogOrderByWithRelationInput | WalletSignatureLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WalletSignatureLogs.
     */
    cursor?: WalletSignatureLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletSignatureLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletSignatureLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WalletSignatureLogs.
     */
    distinct?: WalletSignatureLogScalarFieldEnum | WalletSignatureLogScalarFieldEnum[]
  }

  /**
   * WalletSignatureLog findFirstOrThrow
   */
  export type WalletSignatureLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletSignatureLog
     */
    select?: WalletSignatureLogSelect<ExtArgs> | null
    /**
     * Filter, which WalletSignatureLog to fetch.
     */
    where?: WalletSignatureLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletSignatureLogs to fetch.
     */
    orderBy?: WalletSignatureLogOrderByWithRelationInput | WalletSignatureLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WalletSignatureLogs.
     */
    cursor?: WalletSignatureLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletSignatureLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletSignatureLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WalletSignatureLogs.
     */
    distinct?: WalletSignatureLogScalarFieldEnum | WalletSignatureLogScalarFieldEnum[]
  }

  /**
   * WalletSignatureLog findMany
   */
  export type WalletSignatureLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletSignatureLog
     */
    select?: WalletSignatureLogSelect<ExtArgs> | null
    /**
     * Filter, which WalletSignatureLogs to fetch.
     */
    where?: WalletSignatureLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletSignatureLogs to fetch.
     */
    orderBy?: WalletSignatureLogOrderByWithRelationInput | WalletSignatureLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WalletSignatureLogs.
     */
    cursor?: WalletSignatureLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletSignatureLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletSignatureLogs.
     */
    skip?: number
    distinct?: WalletSignatureLogScalarFieldEnum | WalletSignatureLogScalarFieldEnum[]
  }

  /**
   * WalletSignatureLog create
   */
  export type WalletSignatureLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletSignatureLog
     */
    select?: WalletSignatureLogSelect<ExtArgs> | null
    /**
     * The data needed to create a WalletSignatureLog.
     */
    data: XOR<WalletSignatureLogCreateInput, WalletSignatureLogUncheckedCreateInput>
  }

  /**
   * WalletSignatureLog createMany
   */
  export type WalletSignatureLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WalletSignatureLogs.
     */
    data: WalletSignatureLogCreateManyInput | WalletSignatureLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WalletSignatureLog createManyAndReturn
   */
  export type WalletSignatureLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletSignatureLog
     */
    select?: WalletSignatureLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WalletSignatureLogs.
     */
    data: WalletSignatureLogCreateManyInput | WalletSignatureLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WalletSignatureLog update
   */
  export type WalletSignatureLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletSignatureLog
     */
    select?: WalletSignatureLogSelect<ExtArgs> | null
    /**
     * The data needed to update a WalletSignatureLog.
     */
    data: XOR<WalletSignatureLogUpdateInput, WalletSignatureLogUncheckedUpdateInput>
    /**
     * Choose, which WalletSignatureLog to update.
     */
    where: WalletSignatureLogWhereUniqueInput
  }

  /**
   * WalletSignatureLog updateMany
   */
  export type WalletSignatureLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WalletSignatureLogs.
     */
    data: XOR<WalletSignatureLogUpdateManyMutationInput, WalletSignatureLogUncheckedUpdateManyInput>
    /**
     * Filter which WalletSignatureLogs to update
     */
    where?: WalletSignatureLogWhereInput
  }

  /**
   * WalletSignatureLog upsert
   */
  export type WalletSignatureLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletSignatureLog
     */
    select?: WalletSignatureLogSelect<ExtArgs> | null
    /**
     * The filter to search for the WalletSignatureLog to update in case it exists.
     */
    where: WalletSignatureLogWhereUniqueInput
    /**
     * In case the WalletSignatureLog found by the `where` argument doesn't exist, create a new WalletSignatureLog with this data.
     */
    create: XOR<WalletSignatureLogCreateInput, WalletSignatureLogUncheckedCreateInput>
    /**
     * In case the WalletSignatureLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WalletSignatureLogUpdateInput, WalletSignatureLogUncheckedUpdateInput>
  }

  /**
   * WalletSignatureLog delete
   */
  export type WalletSignatureLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletSignatureLog
     */
    select?: WalletSignatureLogSelect<ExtArgs> | null
    /**
     * Filter which WalletSignatureLog to delete.
     */
    where: WalletSignatureLogWhereUniqueInput
  }

  /**
   * WalletSignatureLog deleteMany
   */
  export type WalletSignatureLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WalletSignatureLogs to delete
     */
    where?: WalletSignatureLogWhereInput
  }

  /**
   * WalletSignatureLog without action
   */
  export type WalletSignatureLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletSignatureLog
     */
    select?: WalletSignatureLogSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CustodyWalletScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    chain: 'chain',
    address: 'address',
    keyRef: 'keyRef',
    ledgerAccountId: 'ledgerAccountId',
    createdAt: 'createdAt'
  };

  export type CustodyWalletScalarFieldEnum = (typeof CustodyWalletScalarFieldEnum)[keyof typeof CustodyWalletScalarFieldEnum]


  export const WalletSignatureLogScalarFieldEnum: {
    id: 'id',
    walletId: 'walletId',
    txHash: 'txHash',
    status: 'status',
    rawTx: 'rawTx',
    createdAt: 'createdAt'
  };

  export type WalletSignatureLogScalarFieldEnum = (typeof WalletSignatureLogScalarFieldEnum)[keyof typeof WalletSignatureLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type CustodyWalletWhereInput = {
    AND?: CustodyWalletWhereInput | CustodyWalletWhereInput[]
    OR?: CustodyWalletWhereInput[]
    NOT?: CustodyWalletWhereInput | CustodyWalletWhereInput[]
    id?: StringFilter<"CustodyWallet"> | string
    userId?: StringFilter<"CustodyWallet"> | string
    chain?: StringFilter<"CustodyWallet"> | string
    address?: StringFilter<"CustodyWallet"> | string
    keyRef?: StringFilter<"CustodyWallet"> | string
    ledgerAccountId?: StringFilter<"CustodyWallet"> | string
    createdAt?: DateTimeFilter<"CustodyWallet"> | Date | string
  }

  export type CustodyWalletOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    chain?: SortOrder
    address?: SortOrder
    keyRef?: SortOrder
    ledgerAccountId?: SortOrder
    createdAt?: SortOrder
  }

  export type CustodyWalletWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    address?: string
    ledgerAccountId?: string
    AND?: CustodyWalletWhereInput | CustodyWalletWhereInput[]
    OR?: CustodyWalletWhereInput[]
    NOT?: CustodyWalletWhereInput | CustodyWalletWhereInput[]
    userId?: StringFilter<"CustodyWallet"> | string
    chain?: StringFilter<"CustodyWallet"> | string
    keyRef?: StringFilter<"CustodyWallet"> | string
    createdAt?: DateTimeFilter<"CustodyWallet"> | Date | string
  }, "id" | "address" | "ledgerAccountId">

  export type CustodyWalletOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    chain?: SortOrder
    address?: SortOrder
    keyRef?: SortOrder
    ledgerAccountId?: SortOrder
    createdAt?: SortOrder
    _count?: CustodyWalletCountOrderByAggregateInput
    _max?: CustodyWalletMaxOrderByAggregateInput
    _min?: CustodyWalletMinOrderByAggregateInput
  }

  export type CustodyWalletScalarWhereWithAggregatesInput = {
    AND?: CustodyWalletScalarWhereWithAggregatesInput | CustodyWalletScalarWhereWithAggregatesInput[]
    OR?: CustodyWalletScalarWhereWithAggregatesInput[]
    NOT?: CustodyWalletScalarWhereWithAggregatesInput | CustodyWalletScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CustodyWallet"> | string
    userId?: StringWithAggregatesFilter<"CustodyWallet"> | string
    chain?: StringWithAggregatesFilter<"CustodyWallet"> | string
    address?: StringWithAggregatesFilter<"CustodyWallet"> | string
    keyRef?: StringWithAggregatesFilter<"CustodyWallet"> | string
    ledgerAccountId?: StringWithAggregatesFilter<"CustodyWallet"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CustodyWallet"> | Date | string
  }

  export type WalletSignatureLogWhereInput = {
    AND?: WalletSignatureLogWhereInput | WalletSignatureLogWhereInput[]
    OR?: WalletSignatureLogWhereInput[]
    NOT?: WalletSignatureLogWhereInput | WalletSignatureLogWhereInput[]
    id?: StringFilter<"WalletSignatureLog"> | string
    walletId?: StringFilter<"WalletSignatureLog"> | string
    txHash?: StringNullableFilter<"WalletSignatureLog"> | string | null
    status?: StringFilter<"WalletSignatureLog"> | string
    rawTx?: StringNullableFilter<"WalletSignatureLog"> | string | null
    createdAt?: DateTimeFilter<"WalletSignatureLog"> | Date | string
  }

  export type WalletSignatureLogOrderByWithRelationInput = {
    id?: SortOrder
    walletId?: SortOrder
    txHash?: SortOrderInput | SortOrder
    status?: SortOrder
    rawTx?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type WalletSignatureLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WalletSignatureLogWhereInput | WalletSignatureLogWhereInput[]
    OR?: WalletSignatureLogWhereInput[]
    NOT?: WalletSignatureLogWhereInput | WalletSignatureLogWhereInput[]
    walletId?: StringFilter<"WalletSignatureLog"> | string
    txHash?: StringNullableFilter<"WalletSignatureLog"> | string | null
    status?: StringFilter<"WalletSignatureLog"> | string
    rawTx?: StringNullableFilter<"WalletSignatureLog"> | string | null
    createdAt?: DateTimeFilter<"WalletSignatureLog"> | Date | string
  }, "id">

  export type WalletSignatureLogOrderByWithAggregationInput = {
    id?: SortOrder
    walletId?: SortOrder
    txHash?: SortOrderInput | SortOrder
    status?: SortOrder
    rawTx?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: WalletSignatureLogCountOrderByAggregateInput
    _max?: WalletSignatureLogMaxOrderByAggregateInput
    _min?: WalletSignatureLogMinOrderByAggregateInput
  }

  export type WalletSignatureLogScalarWhereWithAggregatesInput = {
    AND?: WalletSignatureLogScalarWhereWithAggregatesInput | WalletSignatureLogScalarWhereWithAggregatesInput[]
    OR?: WalletSignatureLogScalarWhereWithAggregatesInput[]
    NOT?: WalletSignatureLogScalarWhereWithAggregatesInput | WalletSignatureLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WalletSignatureLog"> | string
    walletId?: StringWithAggregatesFilter<"WalletSignatureLog"> | string
    txHash?: StringNullableWithAggregatesFilter<"WalletSignatureLog"> | string | null
    status?: StringWithAggregatesFilter<"WalletSignatureLog"> | string
    rawTx?: StringNullableWithAggregatesFilter<"WalletSignatureLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WalletSignatureLog"> | Date | string
  }

  export type CustodyWalletCreateInput = {
    id?: string
    userId: string
    chain: string
    address: string
    keyRef: string
    ledgerAccountId: string
    createdAt?: Date | string
  }

  export type CustodyWalletUncheckedCreateInput = {
    id?: string
    userId: string
    chain: string
    address: string
    keyRef: string
    ledgerAccountId: string
    createdAt?: Date | string
  }

  export type CustodyWalletUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    chain?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    keyRef?: StringFieldUpdateOperationsInput | string
    ledgerAccountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustodyWalletUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    chain?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    keyRef?: StringFieldUpdateOperationsInput | string
    ledgerAccountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustodyWalletCreateManyInput = {
    id?: string
    userId: string
    chain: string
    address: string
    keyRef: string
    ledgerAccountId: string
    createdAt?: Date | string
  }

  export type CustodyWalletUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    chain?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    keyRef?: StringFieldUpdateOperationsInput | string
    ledgerAccountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustodyWalletUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    chain?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    keyRef?: StringFieldUpdateOperationsInput | string
    ledgerAccountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletSignatureLogCreateInput = {
    id?: string
    walletId: string
    txHash?: string | null
    status: string
    rawTx?: string | null
    createdAt?: Date | string
  }

  export type WalletSignatureLogUncheckedCreateInput = {
    id?: string
    walletId: string
    txHash?: string | null
    status: string
    rawTx?: string | null
    createdAt?: Date | string
  }

  export type WalletSignatureLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    rawTx?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletSignatureLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    rawTx?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletSignatureLogCreateManyInput = {
    id?: string
    walletId: string
    txHash?: string | null
    status: string
    rawTx?: string | null
    createdAt?: Date | string
  }

  export type WalletSignatureLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    rawTx?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletSignatureLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    rawTx?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CustodyWalletCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chain?: SortOrder
    address?: SortOrder
    keyRef?: SortOrder
    ledgerAccountId?: SortOrder
    createdAt?: SortOrder
  }

  export type CustodyWalletMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chain?: SortOrder
    address?: SortOrder
    keyRef?: SortOrder
    ledgerAccountId?: SortOrder
    createdAt?: SortOrder
  }

  export type CustodyWalletMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chain?: SortOrder
    address?: SortOrder
    keyRef?: SortOrder
    ledgerAccountId?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WalletSignatureLogCountOrderByAggregateInput = {
    id?: SortOrder
    walletId?: SortOrder
    txHash?: SortOrder
    status?: SortOrder
    rawTx?: SortOrder
    createdAt?: SortOrder
  }

  export type WalletSignatureLogMaxOrderByAggregateInput = {
    id?: SortOrder
    walletId?: SortOrder
    txHash?: SortOrder
    status?: SortOrder
    rawTx?: SortOrder
    createdAt?: SortOrder
  }

  export type WalletSignatureLogMinOrderByAggregateInput = {
    id?: SortOrder
    walletId?: SortOrder
    txHash?: SortOrder
    status?: SortOrder
    rawTx?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CustodyWalletDefaultArgs instead
     */
    export type CustodyWalletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustodyWalletDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WalletSignatureLogDefaultArgs instead
     */
    export type WalletSignatureLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WalletSignatureLogDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}