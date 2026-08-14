
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model KycVerification
 * 
 */
export type KycVerification = $Result.DefaultSelection<Prisma.$KycVerificationPayload>
/**
 * Model ScreeningResult
 * 
 */
export type ScreeningResult = $Result.DefaultSelection<Prisma.$ScreeningResultPayload>
/**
 * Model KycAuditLog
 * 
 */
export type KycAuditLog = $Result.DefaultSelection<Prisma.$KycAuditLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN',
  COMPLIANCE_OFFICER: 'COMPLIANCE_OFFICER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const KycStatus: {
  UNVERIFIED: 'UNVERIFIED',
  PENDING: 'PENDING',
  VERIFIED: 'VERIFIED',
  REJECTED: 'REJECTED'
};

export type KycStatus = (typeof KycStatus)[keyof typeof KycStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type KycStatus = $Enums.KycStatus

export const KycStatus: typeof $Enums.KycStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.kycVerification`: Exposes CRUD operations for the **KycVerification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KycVerifications
    * const kycVerifications = await prisma.kycVerification.findMany()
    * ```
    */
  get kycVerification(): Prisma.KycVerificationDelegate<ExtArgs>;

  /**
   * `prisma.screeningResult`: Exposes CRUD operations for the **ScreeningResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScreeningResults
    * const screeningResults = await prisma.screeningResult.findMany()
    * ```
    */
  get screeningResult(): Prisma.ScreeningResultDelegate<ExtArgs>;

  /**
   * `prisma.kycAuditLog`: Exposes CRUD operations for the **KycAuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KycAuditLogs
    * const kycAuditLogs = await prisma.kycAuditLog.findMany()
    * ```
    */
  get kycAuditLog(): Prisma.KycAuditLogDelegate<ExtArgs>;
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
    User: 'User',
    KycVerification: 'KycVerification',
    ScreeningResult: 'ScreeningResult',
    KycAuditLog: 'KycAuditLog'
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
      modelProps: "user" | "kycVerification" | "screeningResult" | "kycAuditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      KycVerification: {
        payload: Prisma.$KycVerificationPayload<ExtArgs>
        fields: Prisma.KycVerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KycVerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycVerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KycVerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycVerificationPayload>
          }
          findFirst: {
            args: Prisma.KycVerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycVerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KycVerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycVerificationPayload>
          }
          findMany: {
            args: Prisma.KycVerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycVerificationPayload>[]
          }
          create: {
            args: Prisma.KycVerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycVerificationPayload>
          }
          createMany: {
            args: Prisma.KycVerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KycVerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycVerificationPayload>[]
          }
          delete: {
            args: Prisma.KycVerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycVerificationPayload>
          }
          update: {
            args: Prisma.KycVerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycVerificationPayload>
          }
          deleteMany: {
            args: Prisma.KycVerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KycVerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.KycVerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycVerificationPayload>
          }
          aggregate: {
            args: Prisma.KycVerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKycVerification>
          }
          groupBy: {
            args: Prisma.KycVerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<KycVerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.KycVerificationCountArgs<ExtArgs>
            result: $Utils.Optional<KycVerificationCountAggregateOutputType> | number
          }
        }
      }
      ScreeningResult: {
        payload: Prisma.$ScreeningResultPayload<ExtArgs>
        fields: Prisma.ScreeningResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScreeningResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreeningResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScreeningResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreeningResultPayload>
          }
          findFirst: {
            args: Prisma.ScreeningResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreeningResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScreeningResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreeningResultPayload>
          }
          findMany: {
            args: Prisma.ScreeningResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreeningResultPayload>[]
          }
          create: {
            args: Prisma.ScreeningResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreeningResultPayload>
          }
          createMany: {
            args: Prisma.ScreeningResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScreeningResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreeningResultPayload>[]
          }
          delete: {
            args: Prisma.ScreeningResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreeningResultPayload>
          }
          update: {
            args: Prisma.ScreeningResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreeningResultPayload>
          }
          deleteMany: {
            args: Prisma.ScreeningResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScreeningResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ScreeningResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreeningResultPayload>
          }
          aggregate: {
            args: Prisma.ScreeningResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScreeningResult>
          }
          groupBy: {
            args: Prisma.ScreeningResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScreeningResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScreeningResultCountArgs<ExtArgs>
            result: $Utils.Optional<ScreeningResultCountAggregateOutputType> | number
          }
        }
      }
      KycAuditLog: {
        payload: Prisma.$KycAuditLogPayload<ExtArgs>
        fields: Prisma.KycAuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KycAuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycAuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KycAuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycAuditLogPayload>
          }
          findFirst: {
            args: Prisma.KycAuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycAuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KycAuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycAuditLogPayload>
          }
          findMany: {
            args: Prisma.KycAuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycAuditLogPayload>[]
          }
          create: {
            args: Prisma.KycAuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycAuditLogPayload>
          }
          createMany: {
            args: Prisma.KycAuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KycAuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycAuditLogPayload>[]
          }
          delete: {
            args: Prisma.KycAuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycAuditLogPayload>
          }
          update: {
            args: Prisma.KycAuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycAuditLogPayload>
          }
          deleteMany: {
            args: Prisma.KycAuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KycAuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.KycAuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycAuditLogPayload>
          }
          aggregate: {
            args: Prisma.KycAuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKycAuditLog>
          }
          groupBy: {
            args: Prisma.KycAuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<KycAuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.KycAuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<KycAuditLogCountAggregateOutputType> | number
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    verifications: number
    screeningResults: number
    auditLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verifications?: boolean | UserCountOutputTypeCountVerificationsArgs
    screeningResults?: boolean | UserCountOutputTypeCountScreeningResultsArgs
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVerificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KycVerificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountScreeningResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScreeningResultWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KycAuditLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    role: $Enums.UserRole | null
    kycStatus: $Enums.KycStatus | null
    kycTier: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    role: $Enums.UserRole | null
    kycStatus: $Enums.KycStatus | null
    kycTier: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    firstName: number
    lastName: number
    phone: number
    role: number
    kycStatus: number
    kycTier: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    phone?: true
    role?: true
    kycStatus?: true
    kycTier?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    phone?: true
    role?: true
    kycStatus?: true
    kycTier?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    phone?: true
    role?: true
    kycStatus?: true
    kycTier?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    phone: string | null
    role: $Enums.UserRole
    kycStatus: $Enums.KycStatus
    kycTier: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    role?: boolean
    kycStatus?: boolean
    kycTier?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    verifications?: boolean | User$verificationsArgs<ExtArgs>
    screeningResults?: boolean | User$screeningResultsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    role?: boolean
    kycStatus?: boolean
    kycTier?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    role?: boolean
    kycStatus?: boolean
    kycTier?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verifications?: boolean | User$verificationsArgs<ExtArgs>
    screeningResults?: boolean | User$screeningResultsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      verifications: Prisma.$KycVerificationPayload<ExtArgs>[]
      screeningResults: Prisma.$ScreeningResultPayload<ExtArgs>[]
      auditLogs: Prisma.$KycAuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      firstName: string
      lastName: string
      phone: string | null
      role: $Enums.UserRole
      kycStatus: $Enums.KycStatus
      kycTier: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    verifications<T extends User$verificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$verificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KycVerificationPayload<ExtArgs>, T, "findMany"> | Null>
    screeningResults<T extends User$screeningResultsArgs<ExtArgs> = {}>(args?: Subset<T, User$screeningResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreeningResultPayload<ExtArgs>, T, "findMany"> | Null>
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KycAuditLogPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly kycStatus: FieldRef<"User", 'KycStatus'>
    readonly kycTier: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.verifications
   */
  export type User$verificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycVerification
     */
    select?: KycVerificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycVerificationInclude<ExtArgs> | null
    where?: KycVerificationWhereInput
    orderBy?: KycVerificationOrderByWithRelationInput | KycVerificationOrderByWithRelationInput[]
    cursor?: KycVerificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KycVerificationScalarFieldEnum | KycVerificationScalarFieldEnum[]
  }

  /**
   * User.screeningResults
   */
  export type User$screeningResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreeningResult
     */
    select?: ScreeningResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreeningResultInclude<ExtArgs> | null
    where?: ScreeningResultWhereInput
    orderBy?: ScreeningResultOrderByWithRelationInput | ScreeningResultOrderByWithRelationInput[]
    cursor?: ScreeningResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScreeningResultScalarFieldEnum | ScreeningResultScalarFieldEnum[]
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycAuditLog
     */
    select?: KycAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycAuditLogInclude<ExtArgs> | null
    where?: KycAuditLogWhereInput
    orderBy?: KycAuditLogOrderByWithRelationInput | KycAuditLogOrderByWithRelationInput[]
    cursor?: KycAuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KycAuditLogScalarFieldEnum | KycAuditLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model KycVerification
   */

  export type AggregateKycVerification = {
    _count: KycVerificationCountAggregateOutputType | null
    _min: KycVerificationMinAggregateOutputType | null
    _max: KycVerificationMaxAggregateOutputType | null
  }

  export type KycVerificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    documentType: string | null
    documentNumber: string | null
    documentCountry: string | null
    documentFrontUrl: string | null
    documentBackUrl: string | null
    selfieUrl: string | null
    status: $Enums.KycStatus | null
    decision: string | null
    decisionReason: string | null
    decidedBy: string | null
    pepScreened: boolean | null
    sanctionScreened: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KycVerificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    documentType: string | null
    documentNumber: string | null
    documentCountry: string | null
    documentFrontUrl: string | null
    documentBackUrl: string | null
    selfieUrl: string | null
    status: $Enums.KycStatus | null
    decision: string | null
    decisionReason: string | null
    decidedBy: string | null
    pepScreened: boolean | null
    sanctionScreened: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KycVerificationCountAggregateOutputType = {
    id: number
    userId: number
    documentType: number
    documentNumber: number
    documentCountry: number
    documentFrontUrl: number
    documentBackUrl: number
    selfieUrl: number
    status: number
    decision: number
    decisionReason: number
    decidedBy: number
    providerResponse: number
    pepScreened: number
    sanctionScreened: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type KycVerificationMinAggregateInputType = {
    id?: true
    userId?: true
    documentType?: true
    documentNumber?: true
    documentCountry?: true
    documentFrontUrl?: true
    documentBackUrl?: true
    selfieUrl?: true
    status?: true
    decision?: true
    decisionReason?: true
    decidedBy?: true
    pepScreened?: true
    sanctionScreened?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KycVerificationMaxAggregateInputType = {
    id?: true
    userId?: true
    documentType?: true
    documentNumber?: true
    documentCountry?: true
    documentFrontUrl?: true
    documentBackUrl?: true
    selfieUrl?: true
    status?: true
    decision?: true
    decisionReason?: true
    decidedBy?: true
    pepScreened?: true
    sanctionScreened?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KycVerificationCountAggregateInputType = {
    id?: true
    userId?: true
    documentType?: true
    documentNumber?: true
    documentCountry?: true
    documentFrontUrl?: true
    documentBackUrl?: true
    selfieUrl?: true
    status?: true
    decision?: true
    decisionReason?: true
    decidedBy?: true
    providerResponse?: true
    pepScreened?: true
    sanctionScreened?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type KycVerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KycVerification to aggregate.
     */
    where?: KycVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KycVerifications to fetch.
     */
    orderBy?: KycVerificationOrderByWithRelationInput | KycVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KycVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KycVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KycVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KycVerifications
    **/
    _count?: true | KycVerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KycVerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KycVerificationMaxAggregateInputType
  }

  export type GetKycVerificationAggregateType<T extends KycVerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateKycVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKycVerification[P]>
      : GetScalarType<T[P], AggregateKycVerification[P]>
  }




  export type KycVerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KycVerificationWhereInput
    orderBy?: KycVerificationOrderByWithAggregationInput | KycVerificationOrderByWithAggregationInput[]
    by: KycVerificationScalarFieldEnum[] | KycVerificationScalarFieldEnum
    having?: KycVerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KycVerificationCountAggregateInputType | true
    _min?: KycVerificationMinAggregateInputType
    _max?: KycVerificationMaxAggregateInputType
  }

  export type KycVerificationGroupByOutputType = {
    id: string
    userId: string
    documentType: string
    documentNumber: string
    documentCountry: string | null
    documentFrontUrl: string | null
    documentBackUrl: string | null
    selfieUrl: string | null
    status: $Enums.KycStatus
    decision: string | null
    decisionReason: string | null
    decidedBy: string | null
    providerResponse: JsonValue | null
    pepScreened: boolean
    sanctionScreened: boolean
    createdAt: Date
    updatedAt: Date
    _count: KycVerificationCountAggregateOutputType | null
    _min: KycVerificationMinAggregateOutputType | null
    _max: KycVerificationMaxAggregateOutputType | null
  }

  type GetKycVerificationGroupByPayload<T extends KycVerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KycVerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KycVerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KycVerificationGroupByOutputType[P]>
            : GetScalarType<T[P], KycVerificationGroupByOutputType[P]>
        }
      >
    >


  export type KycVerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    documentType?: boolean
    documentNumber?: boolean
    documentCountry?: boolean
    documentFrontUrl?: boolean
    documentBackUrl?: boolean
    selfieUrl?: boolean
    status?: boolean
    decision?: boolean
    decisionReason?: boolean
    decidedBy?: boolean
    providerResponse?: boolean
    pepScreened?: boolean
    sanctionScreened?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kycVerification"]>

  export type KycVerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    documentType?: boolean
    documentNumber?: boolean
    documentCountry?: boolean
    documentFrontUrl?: boolean
    documentBackUrl?: boolean
    selfieUrl?: boolean
    status?: boolean
    decision?: boolean
    decisionReason?: boolean
    decidedBy?: boolean
    providerResponse?: boolean
    pepScreened?: boolean
    sanctionScreened?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kycVerification"]>

  export type KycVerificationSelectScalar = {
    id?: boolean
    userId?: boolean
    documentType?: boolean
    documentNumber?: boolean
    documentCountry?: boolean
    documentFrontUrl?: boolean
    documentBackUrl?: boolean
    selfieUrl?: boolean
    status?: boolean
    decision?: boolean
    decisionReason?: boolean
    decidedBy?: boolean
    providerResponse?: boolean
    pepScreened?: boolean
    sanctionScreened?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type KycVerificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type KycVerificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $KycVerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KycVerification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      documentType: string
      documentNumber: string
      documentCountry: string | null
      documentFrontUrl: string | null
      documentBackUrl: string | null
      selfieUrl: string | null
      status: $Enums.KycStatus
      decision: string | null
      decisionReason: string | null
      decidedBy: string | null
      providerResponse: Prisma.JsonValue | null
      pepScreened: boolean
      sanctionScreened: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["kycVerification"]>
    composites: {}
  }

  type KycVerificationGetPayload<S extends boolean | null | undefined | KycVerificationDefaultArgs> = $Result.GetResult<Prisma.$KycVerificationPayload, S>

  type KycVerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<KycVerificationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: KycVerificationCountAggregateInputType | true
    }

  export interface KycVerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KycVerification'], meta: { name: 'KycVerification' } }
    /**
     * Find zero or one KycVerification that matches the filter.
     * @param {KycVerificationFindUniqueArgs} args - Arguments to find a KycVerification
     * @example
     * // Get one KycVerification
     * const kycVerification = await prisma.kycVerification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KycVerificationFindUniqueArgs>(args: SelectSubset<T, KycVerificationFindUniqueArgs<ExtArgs>>): Prisma__KycVerificationClient<$Result.GetResult<Prisma.$KycVerificationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one KycVerification that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {KycVerificationFindUniqueOrThrowArgs} args - Arguments to find a KycVerification
     * @example
     * // Get one KycVerification
     * const kycVerification = await prisma.kycVerification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KycVerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, KycVerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KycVerificationClient<$Result.GetResult<Prisma.$KycVerificationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first KycVerification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycVerificationFindFirstArgs} args - Arguments to find a KycVerification
     * @example
     * // Get one KycVerification
     * const kycVerification = await prisma.kycVerification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KycVerificationFindFirstArgs>(args?: SelectSubset<T, KycVerificationFindFirstArgs<ExtArgs>>): Prisma__KycVerificationClient<$Result.GetResult<Prisma.$KycVerificationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first KycVerification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycVerificationFindFirstOrThrowArgs} args - Arguments to find a KycVerification
     * @example
     * // Get one KycVerification
     * const kycVerification = await prisma.kycVerification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KycVerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, KycVerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__KycVerificationClient<$Result.GetResult<Prisma.$KycVerificationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more KycVerifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycVerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KycVerifications
     * const kycVerifications = await prisma.kycVerification.findMany()
     * 
     * // Get first 10 KycVerifications
     * const kycVerifications = await prisma.kycVerification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kycVerificationWithIdOnly = await prisma.kycVerification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KycVerificationFindManyArgs>(args?: SelectSubset<T, KycVerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KycVerificationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a KycVerification.
     * @param {KycVerificationCreateArgs} args - Arguments to create a KycVerification.
     * @example
     * // Create one KycVerification
     * const KycVerification = await prisma.kycVerification.create({
     *   data: {
     *     // ... data to create a KycVerification
     *   }
     * })
     * 
     */
    create<T extends KycVerificationCreateArgs>(args: SelectSubset<T, KycVerificationCreateArgs<ExtArgs>>): Prisma__KycVerificationClient<$Result.GetResult<Prisma.$KycVerificationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many KycVerifications.
     * @param {KycVerificationCreateManyArgs} args - Arguments to create many KycVerifications.
     * @example
     * // Create many KycVerifications
     * const kycVerification = await prisma.kycVerification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KycVerificationCreateManyArgs>(args?: SelectSubset<T, KycVerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KycVerifications and returns the data saved in the database.
     * @param {KycVerificationCreateManyAndReturnArgs} args - Arguments to create many KycVerifications.
     * @example
     * // Create many KycVerifications
     * const kycVerification = await prisma.kycVerification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KycVerifications and only return the `id`
     * const kycVerificationWithIdOnly = await prisma.kycVerification.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KycVerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, KycVerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KycVerificationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a KycVerification.
     * @param {KycVerificationDeleteArgs} args - Arguments to delete one KycVerification.
     * @example
     * // Delete one KycVerification
     * const KycVerification = await prisma.kycVerification.delete({
     *   where: {
     *     // ... filter to delete one KycVerification
     *   }
     * })
     * 
     */
    delete<T extends KycVerificationDeleteArgs>(args: SelectSubset<T, KycVerificationDeleteArgs<ExtArgs>>): Prisma__KycVerificationClient<$Result.GetResult<Prisma.$KycVerificationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one KycVerification.
     * @param {KycVerificationUpdateArgs} args - Arguments to update one KycVerification.
     * @example
     * // Update one KycVerification
     * const kycVerification = await prisma.kycVerification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KycVerificationUpdateArgs>(args: SelectSubset<T, KycVerificationUpdateArgs<ExtArgs>>): Prisma__KycVerificationClient<$Result.GetResult<Prisma.$KycVerificationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more KycVerifications.
     * @param {KycVerificationDeleteManyArgs} args - Arguments to filter KycVerifications to delete.
     * @example
     * // Delete a few KycVerifications
     * const { count } = await prisma.kycVerification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KycVerificationDeleteManyArgs>(args?: SelectSubset<T, KycVerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KycVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycVerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KycVerifications
     * const kycVerification = await prisma.kycVerification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KycVerificationUpdateManyArgs>(args: SelectSubset<T, KycVerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one KycVerification.
     * @param {KycVerificationUpsertArgs} args - Arguments to update or create a KycVerification.
     * @example
     * // Update or create a KycVerification
     * const kycVerification = await prisma.kycVerification.upsert({
     *   create: {
     *     // ... data to create a KycVerification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KycVerification we want to update
     *   }
     * })
     */
    upsert<T extends KycVerificationUpsertArgs>(args: SelectSubset<T, KycVerificationUpsertArgs<ExtArgs>>): Prisma__KycVerificationClient<$Result.GetResult<Prisma.$KycVerificationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of KycVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycVerificationCountArgs} args - Arguments to filter KycVerifications to count.
     * @example
     * // Count the number of KycVerifications
     * const count = await prisma.kycVerification.count({
     *   where: {
     *     // ... the filter for the KycVerifications we want to count
     *   }
     * })
    **/
    count<T extends KycVerificationCountArgs>(
      args?: Subset<T, KycVerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KycVerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KycVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycVerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KycVerificationAggregateArgs>(args: Subset<T, KycVerificationAggregateArgs>): Prisma.PrismaPromise<GetKycVerificationAggregateType<T>>

    /**
     * Group by KycVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycVerificationGroupByArgs} args - Group by arguments.
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
      T extends KycVerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KycVerificationGroupByArgs['orderBy'] }
        : { orderBy?: KycVerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KycVerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKycVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KycVerification model
   */
  readonly fields: KycVerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KycVerification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KycVerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the KycVerification model
   */ 
  interface KycVerificationFieldRefs {
    readonly id: FieldRef<"KycVerification", 'String'>
    readonly userId: FieldRef<"KycVerification", 'String'>
    readonly documentType: FieldRef<"KycVerification", 'String'>
    readonly documentNumber: FieldRef<"KycVerification", 'String'>
    readonly documentCountry: FieldRef<"KycVerification", 'String'>
    readonly documentFrontUrl: FieldRef<"KycVerification", 'String'>
    readonly documentBackUrl: FieldRef<"KycVerification", 'String'>
    readonly selfieUrl: FieldRef<"KycVerification", 'String'>
    readonly status: FieldRef<"KycVerification", 'KycStatus'>
    readonly decision: FieldRef<"KycVerification", 'String'>
    readonly decisionReason: FieldRef<"KycVerification", 'String'>
    readonly decidedBy: FieldRef<"KycVerification", 'String'>
    readonly providerResponse: FieldRef<"KycVerification", 'Json'>
    readonly pepScreened: FieldRef<"KycVerification", 'Boolean'>
    readonly sanctionScreened: FieldRef<"KycVerification", 'Boolean'>
    readonly createdAt: FieldRef<"KycVerification", 'DateTime'>
    readonly updatedAt: FieldRef<"KycVerification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * KycVerification findUnique
   */
  export type KycVerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycVerification
     */
    select?: KycVerificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycVerificationInclude<ExtArgs> | null
    /**
     * Filter, which KycVerification to fetch.
     */
    where: KycVerificationWhereUniqueInput
  }

  /**
   * KycVerification findUniqueOrThrow
   */
  export type KycVerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycVerification
     */
    select?: KycVerificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycVerificationInclude<ExtArgs> | null
    /**
     * Filter, which KycVerification to fetch.
     */
    where: KycVerificationWhereUniqueInput
  }

  /**
   * KycVerification findFirst
   */
  export type KycVerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycVerification
     */
    select?: KycVerificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycVerificationInclude<ExtArgs> | null
    /**
     * Filter, which KycVerification to fetch.
     */
    where?: KycVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KycVerifications to fetch.
     */
    orderBy?: KycVerificationOrderByWithRelationInput | KycVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KycVerifications.
     */
    cursor?: KycVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KycVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KycVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KycVerifications.
     */
    distinct?: KycVerificationScalarFieldEnum | KycVerificationScalarFieldEnum[]
  }

  /**
   * KycVerification findFirstOrThrow
   */
  export type KycVerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycVerification
     */
    select?: KycVerificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycVerificationInclude<ExtArgs> | null
    /**
     * Filter, which KycVerification to fetch.
     */
    where?: KycVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KycVerifications to fetch.
     */
    orderBy?: KycVerificationOrderByWithRelationInput | KycVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KycVerifications.
     */
    cursor?: KycVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KycVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KycVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KycVerifications.
     */
    distinct?: KycVerificationScalarFieldEnum | KycVerificationScalarFieldEnum[]
  }

  /**
   * KycVerification findMany
   */
  export type KycVerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycVerification
     */
    select?: KycVerificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycVerificationInclude<ExtArgs> | null
    /**
     * Filter, which KycVerifications to fetch.
     */
    where?: KycVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KycVerifications to fetch.
     */
    orderBy?: KycVerificationOrderByWithRelationInput | KycVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KycVerifications.
     */
    cursor?: KycVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KycVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KycVerifications.
     */
    skip?: number
    distinct?: KycVerificationScalarFieldEnum | KycVerificationScalarFieldEnum[]
  }

  /**
   * KycVerification create
   */
  export type KycVerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycVerification
     */
    select?: KycVerificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycVerificationInclude<ExtArgs> | null
    /**
     * The data needed to create a KycVerification.
     */
    data: XOR<KycVerificationCreateInput, KycVerificationUncheckedCreateInput>
  }

  /**
   * KycVerification createMany
   */
  export type KycVerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KycVerifications.
     */
    data: KycVerificationCreateManyInput | KycVerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KycVerification createManyAndReturn
   */
  export type KycVerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycVerification
     */
    select?: KycVerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many KycVerifications.
     */
    data: KycVerificationCreateManyInput | KycVerificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycVerificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * KycVerification update
   */
  export type KycVerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycVerification
     */
    select?: KycVerificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycVerificationInclude<ExtArgs> | null
    /**
     * The data needed to update a KycVerification.
     */
    data: XOR<KycVerificationUpdateInput, KycVerificationUncheckedUpdateInput>
    /**
     * Choose, which KycVerification to update.
     */
    where: KycVerificationWhereUniqueInput
  }

  /**
   * KycVerification updateMany
   */
  export type KycVerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KycVerifications.
     */
    data: XOR<KycVerificationUpdateManyMutationInput, KycVerificationUncheckedUpdateManyInput>
    /**
     * Filter which KycVerifications to update
     */
    where?: KycVerificationWhereInput
  }

  /**
   * KycVerification upsert
   */
  export type KycVerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycVerification
     */
    select?: KycVerificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycVerificationInclude<ExtArgs> | null
    /**
     * The filter to search for the KycVerification to update in case it exists.
     */
    where: KycVerificationWhereUniqueInput
    /**
     * In case the KycVerification found by the `where` argument doesn't exist, create a new KycVerification with this data.
     */
    create: XOR<KycVerificationCreateInput, KycVerificationUncheckedCreateInput>
    /**
     * In case the KycVerification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KycVerificationUpdateInput, KycVerificationUncheckedUpdateInput>
  }

  /**
   * KycVerification delete
   */
  export type KycVerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycVerification
     */
    select?: KycVerificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycVerificationInclude<ExtArgs> | null
    /**
     * Filter which KycVerification to delete.
     */
    where: KycVerificationWhereUniqueInput
  }

  /**
   * KycVerification deleteMany
   */
  export type KycVerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KycVerifications to delete
     */
    where?: KycVerificationWhereInput
  }

  /**
   * KycVerification without action
   */
  export type KycVerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycVerification
     */
    select?: KycVerificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycVerificationInclude<ExtArgs> | null
  }


  /**
   * Model ScreeningResult
   */

  export type AggregateScreeningResult = {
    _count: ScreeningResultCountAggregateOutputType | null
    _min: ScreeningResultMinAggregateOutputType | null
    _max: ScreeningResultMaxAggregateOutputType | null
  }

  export type ScreeningResultMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    matched: boolean | null
    createdAt: Date | null
  }

  export type ScreeningResultMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    matched: boolean | null
    createdAt: Date | null
  }

  export type ScreeningResultCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    matched: number
    details: number
    createdAt: number
    _all: number
  }


  export type ScreeningResultMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    matched?: true
    createdAt?: true
  }

  export type ScreeningResultMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    matched?: true
    createdAt?: true
  }

  export type ScreeningResultCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    matched?: true
    details?: true
    createdAt?: true
    _all?: true
  }

  export type ScreeningResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScreeningResult to aggregate.
     */
    where?: ScreeningResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScreeningResults to fetch.
     */
    orderBy?: ScreeningResultOrderByWithRelationInput | ScreeningResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScreeningResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScreeningResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScreeningResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScreeningResults
    **/
    _count?: true | ScreeningResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScreeningResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScreeningResultMaxAggregateInputType
  }

  export type GetScreeningResultAggregateType<T extends ScreeningResultAggregateArgs> = {
        [P in keyof T & keyof AggregateScreeningResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScreeningResult[P]>
      : GetScalarType<T[P], AggregateScreeningResult[P]>
  }




  export type ScreeningResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScreeningResultWhereInput
    orderBy?: ScreeningResultOrderByWithAggregationInput | ScreeningResultOrderByWithAggregationInput[]
    by: ScreeningResultScalarFieldEnum[] | ScreeningResultScalarFieldEnum
    having?: ScreeningResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScreeningResultCountAggregateInputType | true
    _min?: ScreeningResultMinAggregateInputType
    _max?: ScreeningResultMaxAggregateInputType
  }

  export type ScreeningResultGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    matched: boolean
    details: JsonValue | null
    createdAt: Date
    _count: ScreeningResultCountAggregateOutputType | null
    _min: ScreeningResultMinAggregateOutputType | null
    _max: ScreeningResultMaxAggregateOutputType | null
  }

  type GetScreeningResultGroupByPayload<T extends ScreeningResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScreeningResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScreeningResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScreeningResultGroupByOutputType[P]>
            : GetScalarType<T[P], ScreeningResultGroupByOutputType[P]>
        }
      >
    >


  export type ScreeningResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    matched?: boolean
    details?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["screeningResult"]>

  export type ScreeningResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    matched?: boolean
    details?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["screeningResult"]>

  export type ScreeningResultSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    matched?: boolean
    details?: boolean
    createdAt?: boolean
  }

  export type ScreeningResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ScreeningResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ScreeningResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScreeningResult"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      matched: boolean
      details: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["screeningResult"]>
    composites: {}
  }

  type ScreeningResultGetPayload<S extends boolean | null | undefined | ScreeningResultDefaultArgs> = $Result.GetResult<Prisma.$ScreeningResultPayload, S>

  type ScreeningResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ScreeningResultFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ScreeningResultCountAggregateInputType | true
    }

  export interface ScreeningResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScreeningResult'], meta: { name: 'ScreeningResult' } }
    /**
     * Find zero or one ScreeningResult that matches the filter.
     * @param {ScreeningResultFindUniqueArgs} args - Arguments to find a ScreeningResult
     * @example
     * // Get one ScreeningResult
     * const screeningResult = await prisma.screeningResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScreeningResultFindUniqueArgs>(args: SelectSubset<T, ScreeningResultFindUniqueArgs<ExtArgs>>): Prisma__ScreeningResultClient<$Result.GetResult<Prisma.$ScreeningResultPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ScreeningResult that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ScreeningResultFindUniqueOrThrowArgs} args - Arguments to find a ScreeningResult
     * @example
     * // Get one ScreeningResult
     * const screeningResult = await prisma.screeningResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScreeningResultFindUniqueOrThrowArgs>(args: SelectSubset<T, ScreeningResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScreeningResultClient<$Result.GetResult<Prisma.$ScreeningResultPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ScreeningResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreeningResultFindFirstArgs} args - Arguments to find a ScreeningResult
     * @example
     * // Get one ScreeningResult
     * const screeningResult = await prisma.screeningResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScreeningResultFindFirstArgs>(args?: SelectSubset<T, ScreeningResultFindFirstArgs<ExtArgs>>): Prisma__ScreeningResultClient<$Result.GetResult<Prisma.$ScreeningResultPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ScreeningResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreeningResultFindFirstOrThrowArgs} args - Arguments to find a ScreeningResult
     * @example
     * // Get one ScreeningResult
     * const screeningResult = await prisma.screeningResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScreeningResultFindFirstOrThrowArgs>(args?: SelectSubset<T, ScreeningResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScreeningResultClient<$Result.GetResult<Prisma.$ScreeningResultPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ScreeningResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreeningResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScreeningResults
     * const screeningResults = await prisma.screeningResult.findMany()
     * 
     * // Get first 10 ScreeningResults
     * const screeningResults = await prisma.screeningResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const screeningResultWithIdOnly = await prisma.screeningResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScreeningResultFindManyArgs>(args?: SelectSubset<T, ScreeningResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreeningResultPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ScreeningResult.
     * @param {ScreeningResultCreateArgs} args - Arguments to create a ScreeningResult.
     * @example
     * // Create one ScreeningResult
     * const ScreeningResult = await prisma.screeningResult.create({
     *   data: {
     *     // ... data to create a ScreeningResult
     *   }
     * })
     * 
     */
    create<T extends ScreeningResultCreateArgs>(args: SelectSubset<T, ScreeningResultCreateArgs<ExtArgs>>): Prisma__ScreeningResultClient<$Result.GetResult<Prisma.$ScreeningResultPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ScreeningResults.
     * @param {ScreeningResultCreateManyArgs} args - Arguments to create many ScreeningResults.
     * @example
     * // Create many ScreeningResults
     * const screeningResult = await prisma.screeningResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScreeningResultCreateManyArgs>(args?: SelectSubset<T, ScreeningResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScreeningResults and returns the data saved in the database.
     * @param {ScreeningResultCreateManyAndReturnArgs} args - Arguments to create many ScreeningResults.
     * @example
     * // Create many ScreeningResults
     * const screeningResult = await prisma.screeningResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScreeningResults and only return the `id`
     * const screeningResultWithIdOnly = await prisma.screeningResult.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScreeningResultCreateManyAndReturnArgs>(args?: SelectSubset<T, ScreeningResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreeningResultPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ScreeningResult.
     * @param {ScreeningResultDeleteArgs} args - Arguments to delete one ScreeningResult.
     * @example
     * // Delete one ScreeningResult
     * const ScreeningResult = await prisma.screeningResult.delete({
     *   where: {
     *     // ... filter to delete one ScreeningResult
     *   }
     * })
     * 
     */
    delete<T extends ScreeningResultDeleteArgs>(args: SelectSubset<T, ScreeningResultDeleteArgs<ExtArgs>>): Prisma__ScreeningResultClient<$Result.GetResult<Prisma.$ScreeningResultPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ScreeningResult.
     * @param {ScreeningResultUpdateArgs} args - Arguments to update one ScreeningResult.
     * @example
     * // Update one ScreeningResult
     * const screeningResult = await prisma.screeningResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScreeningResultUpdateArgs>(args: SelectSubset<T, ScreeningResultUpdateArgs<ExtArgs>>): Prisma__ScreeningResultClient<$Result.GetResult<Prisma.$ScreeningResultPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ScreeningResults.
     * @param {ScreeningResultDeleteManyArgs} args - Arguments to filter ScreeningResults to delete.
     * @example
     * // Delete a few ScreeningResults
     * const { count } = await prisma.screeningResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScreeningResultDeleteManyArgs>(args?: SelectSubset<T, ScreeningResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScreeningResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreeningResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScreeningResults
     * const screeningResult = await prisma.screeningResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScreeningResultUpdateManyArgs>(args: SelectSubset<T, ScreeningResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ScreeningResult.
     * @param {ScreeningResultUpsertArgs} args - Arguments to update or create a ScreeningResult.
     * @example
     * // Update or create a ScreeningResult
     * const screeningResult = await prisma.screeningResult.upsert({
     *   create: {
     *     // ... data to create a ScreeningResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScreeningResult we want to update
     *   }
     * })
     */
    upsert<T extends ScreeningResultUpsertArgs>(args: SelectSubset<T, ScreeningResultUpsertArgs<ExtArgs>>): Prisma__ScreeningResultClient<$Result.GetResult<Prisma.$ScreeningResultPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ScreeningResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreeningResultCountArgs} args - Arguments to filter ScreeningResults to count.
     * @example
     * // Count the number of ScreeningResults
     * const count = await prisma.screeningResult.count({
     *   where: {
     *     // ... the filter for the ScreeningResults we want to count
     *   }
     * })
    **/
    count<T extends ScreeningResultCountArgs>(
      args?: Subset<T, ScreeningResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScreeningResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScreeningResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreeningResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScreeningResultAggregateArgs>(args: Subset<T, ScreeningResultAggregateArgs>): Prisma.PrismaPromise<GetScreeningResultAggregateType<T>>

    /**
     * Group by ScreeningResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreeningResultGroupByArgs} args - Group by arguments.
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
      T extends ScreeningResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScreeningResultGroupByArgs['orderBy'] }
        : { orderBy?: ScreeningResultGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScreeningResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScreeningResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScreeningResult model
   */
  readonly fields: ScreeningResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScreeningResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScreeningResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ScreeningResult model
   */ 
  interface ScreeningResultFieldRefs {
    readonly id: FieldRef<"ScreeningResult", 'String'>
    readonly userId: FieldRef<"ScreeningResult", 'String'>
    readonly type: FieldRef<"ScreeningResult", 'String'>
    readonly provider: FieldRef<"ScreeningResult", 'String'>
    readonly matched: FieldRef<"ScreeningResult", 'Boolean'>
    readonly details: FieldRef<"ScreeningResult", 'Json'>
    readonly createdAt: FieldRef<"ScreeningResult", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ScreeningResult findUnique
   */
  export type ScreeningResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreeningResult
     */
    select?: ScreeningResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreeningResultInclude<ExtArgs> | null
    /**
     * Filter, which ScreeningResult to fetch.
     */
    where: ScreeningResultWhereUniqueInput
  }

  /**
   * ScreeningResult findUniqueOrThrow
   */
  export type ScreeningResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreeningResult
     */
    select?: ScreeningResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreeningResultInclude<ExtArgs> | null
    /**
     * Filter, which ScreeningResult to fetch.
     */
    where: ScreeningResultWhereUniqueInput
  }

  /**
   * ScreeningResult findFirst
   */
  export type ScreeningResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreeningResult
     */
    select?: ScreeningResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreeningResultInclude<ExtArgs> | null
    /**
     * Filter, which ScreeningResult to fetch.
     */
    where?: ScreeningResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScreeningResults to fetch.
     */
    orderBy?: ScreeningResultOrderByWithRelationInput | ScreeningResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScreeningResults.
     */
    cursor?: ScreeningResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScreeningResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScreeningResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScreeningResults.
     */
    distinct?: ScreeningResultScalarFieldEnum | ScreeningResultScalarFieldEnum[]
  }

  /**
   * ScreeningResult findFirstOrThrow
   */
  export type ScreeningResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreeningResult
     */
    select?: ScreeningResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreeningResultInclude<ExtArgs> | null
    /**
     * Filter, which ScreeningResult to fetch.
     */
    where?: ScreeningResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScreeningResults to fetch.
     */
    orderBy?: ScreeningResultOrderByWithRelationInput | ScreeningResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScreeningResults.
     */
    cursor?: ScreeningResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScreeningResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScreeningResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScreeningResults.
     */
    distinct?: ScreeningResultScalarFieldEnum | ScreeningResultScalarFieldEnum[]
  }

  /**
   * ScreeningResult findMany
   */
  export type ScreeningResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreeningResult
     */
    select?: ScreeningResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreeningResultInclude<ExtArgs> | null
    /**
     * Filter, which ScreeningResults to fetch.
     */
    where?: ScreeningResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScreeningResults to fetch.
     */
    orderBy?: ScreeningResultOrderByWithRelationInput | ScreeningResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScreeningResults.
     */
    cursor?: ScreeningResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScreeningResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScreeningResults.
     */
    skip?: number
    distinct?: ScreeningResultScalarFieldEnum | ScreeningResultScalarFieldEnum[]
  }

  /**
   * ScreeningResult create
   */
  export type ScreeningResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreeningResult
     */
    select?: ScreeningResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreeningResultInclude<ExtArgs> | null
    /**
     * The data needed to create a ScreeningResult.
     */
    data: XOR<ScreeningResultCreateInput, ScreeningResultUncheckedCreateInput>
  }

  /**
   * ScreeningResult createMany
   */
  export type ScreeningResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScreeningResults.
     */
    data: ScreeningResultCreateManyInput | ScreeningResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScreeningResult createManyAndReturn
   */
  export type ScreeningResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreeningResult
     */
    select?: ScreeningResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ScreeningResults.
     */
    data: ScreeningResultCreateManyInput | ScreeningResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreeningResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScreeningResult update
   */
  export type ScreeningResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreeningResult
     */
    select?: ScreeningResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreeningResultInclude<ExtArgs> | null
    /**
     * The data needed to update a ScreeningResult.
     */
    data: XOR<ScreeningResultUpdateInput, ScreeningResultUncheckedUpdateInput>
    /**
     * Choose, which ScreeningResult to update.
     */
    where: ScreeningResultWhereUniqueInput
  }

  /**
   * ScreeningResult updateMany
   */
  export type ScreeningResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScreeningResults.
     */
    data: XOR<ScreeningResultUpdateManyMutationInput, ScreeningResultUncheckedUpdateManyInput>
    /**
     * Filter which ScreeningResults to update
     */
    where?: ScreeningResultWhereInput
  }

  /**
   * ScreeningResult upsert
   */
  export type ScreeningResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreeningResult
     */
    select?: ScreeningResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreeningResultInclude<ExtArgs> | null
    /**
     * The filter to search for the ScreeningResult to update in case it exists.
     */
    where: ScreeningResultWhereUniqueInput
    /**
     * In case the ScreeningResult found by the `where` argument doesn't exist, create a new ScreeningResult with this data.
     */
    create: XOR<ScreeningResultCreateInput, ScreeningResultUncheckedCreateInput>
    /**
     * In case the ScreeningResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScreeningResultUpdateInput, ScreeningResultUncheckedUpdateInput>
  }

  /**
   * ScreeningResult delete
   */
  export type ScreeningResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreeningResult
     */
    select?: ScreeningResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreeningResultInclude<ExtArgs> | null
    /**
     * Filter which ScreeningResult to delete.
     */
    where: ScreeningResultWhereUniqueInput
  }

  /**
   * ScreeningResult deleteMany
   */
  export type ScreeningResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScreeningResults to delete
     */
    where?: ScreeningResultWhereInput
  }

  /**
   * ScreeningResult without action
   */
  export type ScreeningResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreeningResult
     */
    select?: ScreeningResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreeningResultInclude<ExtArgs> | null
  }


  /**
   * Model KycAuditLog
   */

  export type AggregateKycAuditLog = {
    _count: KycAuditLogCountAggregateOutputType | null
    _min: KycAuditLogMinAggregateOutputType | null
    _max: KycAuditLogMaxAggregateOutputType | null
  }

  export type KycAuditLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    fromState: $Enums.KycStatus | null
    toState: $Enums.KycStatus | null
    performedBy: string | null
    reason: string | null
    createdAt: Date | null
  }

  export type KycAuditLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    fromState: $Enums.KycStatus | null
    toState: $Enums.KycStatus | null
    performedBy: string | null
    reason: string | null
    createdAt: Date | null
  }

  export type KycAuditLogCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    fromState: number
    toState: number
    performedBy: number
    reason: number
    createdAt: number
    _all: number
  }


  export type KycAuditLogMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    fromState?: true
    toState?: true
    performedBy?: true
    reason?: true
    createdAt?: true
  }

  export type KycAuditLogMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    fromState?: true
    toState?: true
    performedBy?: true
    reason?: true
    createdAt?: true
  }

  export type KycAuditLogCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    fromState?: true
    toState?: true
    performedBy?: true
    reason?: true
    createdAt?: true
    _all?: true
  }

  export type KycAuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KycAuditLog to aggregate.
     */
    where?: KycAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KycAuditLogs to fetch.
     */
    orderBy?: KycAuditLogOrderByWithRelationInput | KycAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KycAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KycAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KycAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KycAuditLogs
    **/
    _count?: true | KycAuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KycAuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KycAuditLogMaxAggregateInputType
  }

  export type GetKycAuditLogAggregateType<T extends KycAuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateKycAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKycAuditLog[P]>
      : GetScalarType<T[P], AggregateKycAuditLog[P]>
  }




  export type KycAuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KycAuditLogWhereInput
    orderBy?: KycAuditLogOrderByWithAggregationInput | KycAuditLogOrderByWithAggregationInput[]
    by: KycAuditLogScalarFieldEnum[] | KycAuditLogScalarFieldEnum
    having?: KycAuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KycAuditLogCountAggregateInputType | true
    _min?: KycAuditLogMinAggregateInputType
    _max?: KycAuditLogMaxAggregateInputType
  }

  export type KycAuditLogGroupByOutputType = {
    id: string
    userId: string
    action: string
    fromState: $Enums.KycStatus | null
    toState: $Enums.KycStatus
    performedBy: string
    reason: string | null
    createdAt: Date
    _count: KycAuditLogCountAggregateOutputType | null
    _min: KycAuditLogMinAggregateOutputType | null
    _max: KycAuditLogMaxAggregateOutputType | null
  }

  type GetKycAuditLogGroupByPayload<T extends KycAuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KycAuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KycAuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KycAuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], KycAuditLogGroupByOutputType[P]>
        }
      >
    >


  export type KycAuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    fromState?: boolean
    toState?: boolean
    performedBy?: boolean
    reason?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kycAuditLog"]>

  export type KycAuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    fromState?: boolean
    toState?: boolean
    performedBy?: boolean
    reason?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kycAuditLog"]>

  export type KycAuditLogSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    fromState?: boolean
    toState?: boolean
    performedBy?: boolean
    reason?: boolean
    createdAt?: boolean
  }

  export type KycAuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type KycAuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $KycAuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KycAuditLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      action: string
      fromState: $Enums.KycStatus | null
      toState: $Enums.KycStatus
      performedBy: string
      reason: string | null
      createdAt: Date
    }, ExtArgs["result"]["kycAuditLog"]>
    composites: {}
  }

  type KycAuditLogGetPayload<S extends boolean | null | undefined | KycAuditLogDefaultArgs> = $Result.GetResult<Prisma.$KycAuditLogPayload, S>

  type KycAuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<KycAuditLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: KycAuditLogCountAggregateInputType | true
    }

  export interface KycAuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KycAuditLog'], meta: { name: 'KycAuditLog' } }
    /**
     * Find zero or one KycAuditLog that matches the filter.
     * @param {KycAuditLogFindUniqueArgs} args - Arguments to find a KycAuditLog
     * @example
     * // Get one KycAuditLog
     * const kycAuditLog = await prisma.kycAuditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KycAuditLogFindUniqueArgs>(args: SelectSubset<T, KycAuditLogFindUniqueArgs<ExtArgs>>): Prisma__KycAuditLogClient<$Result.GetResult<Prisma.$KycAuditLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one KycAuditLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {KycAuditLogFindUniqueOrThrowArgs} args - Arguments to find a KycAuditLog
     * @example
     * // Get one KycAuditLog
     * const kycAuditLog = await prisma.kycAuditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KycAuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, KycAuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KycAuditLogClient<$Result.GetResult<Prisma.$KycAuditLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first KycAuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycAuditLogFindFirstArgs} args - Arguments to find a KycAuditLog
     * @example
     * // Get one KycAuditLog
     * const kycAuditLog = await prisma.kycAuditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KycAuditLogFindFirstArgs>(args?: SelectSubset<T, KycAuditLogFindFirstArgs<ExtArgs>>): Prisma__KycAuditLogClient<$Result.GetResult<Prisma.$KycAuditLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first KycAuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycAuditLogFindFirstOrThrowArgs} args - Arguments to find a KycAuditLog
     * @example
     * // Get one KycAuditLog
     * const kycAuditLog = await prisma.kycAuditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KycAuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, KycAuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__KycAuditLogClient<$Result.GetResult<Prisma.$KycAuditLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more KycAuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycAuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KycAuditLogs
     * const kycAuditLogs = await prisma.kycAuditLog.findMany()
     * 
     * // Get first 10 KycAuditLogs
     * const kycAuditLogs = await prisma.kycAuditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kycAuditLogWithIdOnly = await prisma.kycAuditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KycAuditLogFindManyArgs>(args?: SelectSubset<T, KycAuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KycAuditLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a KycAuditLog.
     * @param {KycAuditLogCreateArgs} args - Arguments to create a KycAuditLog.
     * @example
     * // Create one KycAuditLog
     * const KycAuditLog = await prisma.kycAuditLog.create({
     *   data: {
     *     // ... data to create a KycAuditLog
     *   }
     * })
     * 
     */
    create<T extends KycAuditLogCreateArgs>(args: SelectSubset<T, KycAuditLogCreateArgs<ExtArgs>>): Prisma__KycAuditLogClient<$Result.GetResult<Prisma.$KycAuditLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many KycAuditLogs.
     * @param {KycAuditLogCreateManyArgs} args - Arguments to create many KycAuditLogs.
     * @example
     * // Create many KycAuditLogs
     * const kycAuditLog = await prisma.kycAuditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KycAuditLogCreateManyArgs>(args?: SelectSubset<T, KycAuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KycAuditLogs and returns the data saved in the database.
     * @param {KycAuditLogCreateManyAndReturnArgs} args - Arguments to create many KycAuditLogs.
     * @example
     * // Create many KycAuditLogs
     * const kycAuditLog = await prisma.kycAuditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KycAuditLogs and only return the `id`
     * const kycAuditLogWithIdOnly = await prisma.kycAuditLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KycAuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, KycAuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KycAuditLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a KycAuditLog.
     * @param {KycAuditLogDeleteArgs} args - Arguments to delete one KycAuditLog.
     * @example
     * // Delete one KycAuditLog
     * const KycAuditLog = await prisma.kycAuditLog.delete({
     *   where: {
     *     // ... filter to delete one KycAuditLog
     *   }
     * })
     * 
     */
    delete<T extends KycAuditLogDeleteArgs>(args: SelectSubset<T, KycAuditLogDeleteArgs<ExtArgs>>): Prisma__KycAuditLogClient<$Result.GetResult<Prisma.$KycAuditLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one KycAuditLog.
     * @param {KycAuditLogUpdateArgs} args - Arguments to update one KycAuditLog.
     * @example
     * // Update one KycAuditLog
     * const kycAuditLog = await prisma.kycAuditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KycAuditLogUpdateArgs>(args: SelectSubset<T, KycAuditLogUpdateArgs<ExtArgs>>): Prisma__KycAuditLogClient<$Result.GetResult<Prisma.$KycAuditLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more KycAuditLogs.
     * @param {KycAuditLogDeleteManyArgs} args - Arguments to filter KycAuditLogs to delete.
     * @example
     * // Delete a few KycAuditLogs
     * const { count } = await prisma.kycAuditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KycAuditLogDeleteManyArgs>(args?: SelectSubset<T, KycAuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KycAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycAuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KycAuditLogs
     * const kycAuditLog = await prisma.kycAuditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KycAuditLogUpdateManyArgs>(args: SelectSubset<T, KycAuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one KycAuditLog.
     * @param {KycAuditLogUpsertArgs} args - Arguments to update or create a KycAuditLog.
     * @example
     * // Update or create a KycAuditLog
     * const kycAuditLog = await prisma.kycAuditLog.upsert({
     *   create: {
     *     // ... data to create a KycAuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KycAuditLog we want to update
     *   }
     * })
     */
    upsert<T extends KycAuditLogUpsertArgs>(args: SelectSubset<T, KycAuditLogUpsertArgs<ExtArgs>>): Prisma__KycAuditLogClient<$Result.GetResult<Prisma.$KycAuditLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of KycAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycAuditLogCountArgs} args - Arguments to filter KycAuditLogs to count.
     * @example
     * // Count the number of KycAuditLogs
     * const count = await prisma.kycAuditLog.count({
     *   where: {
     *     // ... the filter for the KycAuditLogs we want to count
     *   }
     * })
    **/
    count<T extends KycAuditLogCountArgs>(
      args?: Subset<T, KycAuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KycAuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KycAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycAuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KycAuditLogAggregateArgs>(args: Subset<T, KycAuditLogAggregateArgs>): Prisma.PrismaPromise<GetKycAuditLogAggregateType<T>>

    /**
     * Group by KycAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycAuditLogGroupByArgs} args - Group by arguments.
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
      T extends KycAuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KycAuditLogGroupByArgs['orderBy'] }
        : { orderBy?: KycAuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KycAuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKycAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KycAuditLog model
   */
  readonly fields: KycAuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KycAuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KycAuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the KycAuditLog model
   */ 
  interface KycAuditLogFieldRefs {
    readonly id: FieldRef<"KycAuditLog", 'String'>
    readonly userId: FieldRef<"KycAuditLog", 'String'>
    readonly action: FieldRef<"KycAuditLog", 'String'>
    readonly fromState: FieldRef<"KycAuditLog", 'KycStatus'>
    readonly toState: FieldRef<"KycAuditLog", 'KycStatus'>
    readonly performedBy: FieldRef<"KycAuditLog", 'String'>
    readonly reason: FieldRef<"KycAuditLog", 'String'>
    readonly createdAt: FieldRef<"KycAuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * KycAuditLog findUnique
   */
  export type KycAuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycAuditLog
     */
    select?: KycAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which KycAuditLog to fetch.
     */
    where: KycAuditLogWhereUniqueInput
  }

  /**
   * KycAuditLog findUniqueOrThrow
   */
  export type KycAuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycAuditLog
     */
    select?: KycAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which KycAuditLog to fetch.
     */
    where: KycAuditLogWhereUniqueInput
  }

  /**
   * KycAuditLog findFirst
   */
  export type KycAuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycAuditLog
     */
    select?: KycAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which KycAuditLog to fetch.
     */
    where?: KycAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KycAuditLogs to fetch.
     */
    orderBy?: KycAuditLogOrderByWithRelationInput | KycAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KycAuditLogs.
     */
    cursor?: KycAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KycAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KycAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KycAuditLogs.
     */
    distinct?: KycAuditLogScalarFieldEnum | KycAuditLogScalarFieldEnum[]
  }

  /**
   * KycAuditLog findFirstOrThrow
   */
  export type KycAuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycAuditLog
     */
    select?: KycAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which KycAuditLog to fetch.
     */
    where?: KycAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KycAuditLogs to fetch.
     */
    orderBy?: KycAuditLogOrderByWithRelationInput | KycAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KycAuditLogs.
     */
    cursor?: KycAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KycAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KycAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KycAuditLogs.
     */
    distinct?: KycAuditLogScalarFieldEnum | KycAuditLogScalarFieldEnum[]
  }

  /**
   * KycAuditLog findMany
   */
  export type KycAuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycAuditLog
     */
    select?: KycAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which KycAuditLogs to fetch.
     */
    where?: KycAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KycAuditLogs to fetch.
     */
    orderBy?: KycAuditLogOrderByWithRelationInput | KycAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KycAuditLogs.
     */
    cursor?: KycAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KycAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KycAuditLogs.
     */
    skip?: number
    distinct?: KycAuditLogScalarFieldEnum | KycAuditLogScalarFieldEnum[]
  }

  /**
   * KycAuditLog create
   */
  export type KycAuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycAuditLog
     */
    select?: KycAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycAuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a KycAuditLog.
     */
    data: XOR<KycAuditLogCreateInput, KycAuditLogUncheckedCreateInput>
  }

  /**
   * KycAuditLog createMany
   */
  export type KycAuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KycAuditLogs.
     */
    data: KycAuditLogCreateManyInput | KycAuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KycAuditLog createManyAndReturn
   */
  export type KycAuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycAuditLog
     */
    select?: KycAuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many KycAuditLogs.
     */
    data: KycAuditLogCreateManyInput | KycAuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycAuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * KycAuditLog update
   */
  export type KycAuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycAuditLog
     */
    select?: KycAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycAuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a KycAuditLog.
     */
    data: XOR<KycAuditLogUpdateInput, KycAuditLogUncheckedUpdateInput>
    /**
     * Choose, which KycAuditLog to update.
     */
    where: KycAuditLogWhereUniqueInput
  }

  /**
   * KycAuditLog updateMany
   */
  export type KycAuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KycAuditLogs.
     */
    data: XOR<KycAuditLogUpdateManyMutationInput, KycAuditLogUncheckedUpdateManyInput>
    /**
     * Filter which KycAuditLogs to update
     */
    where?: KycAuditLogWhereInput
  }

  /**
   * KycAuditLog upsert
   */
  export type KycAuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycAuditLog
     */
    select?: KycAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycAuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the KycAuditLog to update in case it exists.
     */
    where: KycAuditLogWhereUniqueInput
    /**
     * In case the KycAuditLog found by the `where` argument doesn't exist, create a new KycAuditLog with this data.
     */
    create: XOR<KycAuditLogCreateInput, KycAuditLogUncheckedCreateInput>
    /**
     * In case the KycAuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KycAuditLogUpdateInput, KycAuditLogUncheckedUpdateInput>
  }

  /**
   * KycAuditLog delete
   */
  export type KycAuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycAuditLog
     */
    select?: KycAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycAuditLogInclude<ExtArgs> | null
    /**
     * Filter which KycAuditLog to delete.
     */
    where: KycAuditLogWhereUniqueInput
  }

  /**
   * KycAuditLog deleteMany
   */
  export type KycAuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KycAuditLogs to delete
     */
    where?: KycAuditLogWhereInput
  }

  /**
   * KycAuditLog without action
   */
  export type KycAuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycAuditLog
     */
    select?: KycAuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycAuditLogInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    firstName: 'firstName',
    lastName: 'lastName',
    phone: 'phone',
    role: 'role',
    kycStatus: 'kycStatus',
    kycTier: 'kycTier',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const KycVerificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    documentType: 'documentType',
    documentNumber: 'documentNumber',
    documentCountry: 'documentCountry',
    documentFrontUrl: 'documentFrontUrl',
    documentBackUrl: 'documentBackUrl',
    selfieUrl: 'selfieUrl',
    status: 'status',
    decision: 'decision',
    decisionReason: 'decisionReason',
    decidedBy: 'decidedBy',
    providerResponse: 'providerResponse',
    pepScreened: 'pepScreened',
    sanctionScreened: 'sanctionScreened',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type KycVerificationScalarFieldEnum = (typeof KycVerificationScalarFieldEnum)[keyof typeof KycVerificationScalarFieldEnum]


  export const ScreeningResultScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    matched: 'matched',
    details: 'details',
    createdAt: 'createdAt'
  };

  export type ScreeningResultScalarFieldEnum = (typeof ScreeningResultScalarFieldEnum)[keyof typeof ScreeningResultScalarFieldEnum]


  export const KycAuditLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    fromState: 'fromState',
    toState: 'toState',
    performedBy: 'performedBy',
    reason: 'reason',
    createdAt: 'createdAt'
  };

  export type KycAuditLogScalarFieldEnum = (typeof KycAuditLogScalarFieldEnum)[keyof typeof KycAuditLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'KycStatus'
   */
  export type EnumKycStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KycStatus'>
    


  /**
   * Reference to a field of type 'KycStatus[]'
   */
  export type ListEnumKycStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KycStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    kycStatus?: EnumKycStatusFilter<"User"> | $Enums.KycStatus
    kycTier?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    verifications?: KycVerificationListRelationFilter
    screeningResults?: ScreeningResultListRelationFilter
    auditLogs?: KycAuditLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    kycStatus?: SortOrder
    kycTier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    verifications?: KycVerificationOrderByRelationAggregateInput
    screeningResults?: ScreeningResultOrderByRelationAggregateInput
    auditLogs?: KycAuditLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    kycStatus?: EnumKycStatusFilter<"User"> | $Enums.KycStatus
    kycTier?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    verifications?: KycVerificationListRelationFilter
    screeningResults?: ScreeningResultListRelationFilter
    auditLogs?: KycAuditLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    kycStatus?: SortOrder
    kycTier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    kycStatus?: EnumKycStatusWithAggregatesFilter<"User"> | $Enums.KycStatus
    kycTier?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type KycVerificationWhereInput = {
    AND?: KycVerificationWhereInput | KycVerificationWhereInput[]
    OR?: KycVerificationWhereInput[]
    NOT?: KycVerificationWhereInput | KycVerificationWhereInput[]
    id?: StringFilter<"KycVerification"> | string
    userId?: StringFilter<"KycVerification"> | string
    documentType?: StringFilter<"KycVerification"> | string
    documentNumber?: StringFilter<"KycVerification"> | string
    documentCountry?: StringNullableFilter<"KycVerification"> | string | null
    documentFrontUrl?: StringNullableFilter<"KycVerification"> | string | null
    documentBackUrl?: StringNullableFilter<"KycVerification"> | string | null
    selfieUrl?: StringNullableFilter<"KycVerification"> | string | null
    status?: EnumKycStatusFilter<"KycVerification"> | $Enums.KycStatus
    decision?: StringNullableFilter<"KycVerification"> | string | null
    decisionReason?: StringNullableFilter<"KycVerification"> | string | null
    decidedBy?: StringNullableFilter<"KycVerification"> | string | null
    providerResponse?: JsonNullableFilter<"KycVerification">
    pepScreened?: BoolFilter<"KycVerification"> | boolean
    sanctionScreened?: BoolFilter<"KycVerification"> | boolean
    createdAt?: DateTimeFilter<"KycVerification"> | Date | string
    updatedAt?: DateTimeFilter<"KycVerification"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type KycVerificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    documentType?: SortOrder
    documentNumber?: SortOrder
    documentCountry?: SortOrderInput | SortOrder
    documentFrontUrl?: SortOrderInput | SortOrder
    documentBackUrl?: SortOrderInput | SortOrder
    selfieUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    decision?: SortOrderInput | SortOrder
    decisionReason?: SortOrderInput | SortOrder
    decidedBy?: SortOrderInput | SortOrder
    providerResponse?: SortOrderInput | SortOrder
    pepScreened?: SortOrder
    sanctionScreened?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type KycVerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: KycVerificationWhereInput | KycVerificationWhereInput[]
    OR?: KycVerificationWhereInput[]
    NOT?: KycVerificationWhereInput | KycVerificationWhereInput[]
    userId?: StringFilter<"KycVerification"> | string
    documentType?: StringFilter<"KycVerification"> | string
    documentNumber?: StringFilter<"KycVerification"> | string
    documentCountry?: StringNullableFilter<"KycVerification"> | string | null
    documentFrontUrl?: StringNullableFilter<"KycVerification"> | string | null
    documentBackUrl?: StringNullableFilter<"KycVerification"> | string | null
    selfieUrl?: StringNullableFilter<"KycVerification"> | string | null
    status?: EnumKycStatusFilter<"KycVerification"> | $Enums.KycStatus
    decision?: StringNullableFilter<"KycVerification"> | string | null
    decisionReason?: StringNullableFilter<"KycVerification"> | string | null
    decidedBy?: StringNullableFilter<"KycVerification"> | string | null
    providerResponse?: JsonNullableFilter<"KycVerification">
    pepScreened?: BoolFilter<"KycVerification"> | boolean
    sanctionScreened?: BoolFilter<"KycVerification"> | boolean
    createdAt?: DateTimeFilter<"KycVerification"> | Date | string
    updatedAt?: DateTimeFilter<"KycVerification"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type KycVerificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    documentType?: SortOrder
    documentNumber?: SortOrder
    documentCountry?: SortOrderInput | SortOrder
    documentFrontUrl?: SortOrderInput | SortOrder
    documentBackUrl?: SortOrderInput | SortOrder
    selfieUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    decision?: SortOrderInput | SortOrder
    decisionReason?: SortOrderInput | SortOrder
    decidedBy?: SortOrderInput | SortOrder
    providerResponse?: SortOrderInput | SortOrder
    pepScreened?: SortOrder
    sanctionScreened?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: KycVerificationCountOrderByAggregateInput
    _max?: KycVerificationMaxOrderByAggregateInput
    _min?: KycVerificationMinOrderByAggregateInput
  }

  export type KycVerificationScalarWhereWithAggregatesInput = {
    AND?: KycVerificationScalarWhereWithAggregatesInput | KycVerificationScalarWhereWithAggregatesInput[]
    OR?: KycVerificationScalarWhereWithAggregatesInput[]
    NOT?: KycVerificationScalarWhereWithAggregatesInput | KycVerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"KycVerification"> | string
    userId?: StringWithAggregatesFilter<"KycVerification"> | string
    documentType?: StringWithAggregatesFilter<"KycVerification"> | string
    documentNumber?: StringWithAggregatesFilter<"KycVerification"> | string
    documentCountry?: StringNullableWithAggregatesFilter<"KycVerification"> | string | null
    documentFrontUrl?: StringNullableWithAggregatesFilter<"KycVerification"> | string | null
    documentBackUrl?: StringNullableWithAggregatesFilter<"KycVerification"> | string | null
    selfieUrl?: StringNullableWithAggregatesFilter<"KycVerification"> | string | null
    status?: EnumKycStatusWithAggregatesFilter<"KycVerification"> | $Enums.KycStatus
    decision?: StringNullableWithAggregatesFilter<"KycVerification"> | string | null
    decisionReason?: StringNullableWithAggregatesFilter<"KycVerification"> | string | null
    decidedBy?: StringNullableWithAggregatesFilter<"KycVerification"> | string | null
    providerResponse?: JsonNullableWithAggregatesFilter<"KycVerification">
    pepScreened?: BoolWithAggregatesFilter<"KycVerification"> | boolean
    sanctionScreened?: BoolWithAggregatesFilter<"KycVerification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"KycVerification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"KycVerification"> | Date | string
  }

  export type ScreeningResultWhereInput = {
    AND?: ScreeningResultWhereInput | ScreeningResultWhereInput[]
    OR?: ScreeningResultWhereInput[]
    NOT?: ScreeningResultWhereInput | ScreeningResultWhereInput[]
    id?: StringFilter<"ScreeningResult"> | string
    userId?: StringFilter<"ScreeningResult"> | string
    type?: StringFilter<"ScreeningResult"> | string
    provider?: StringFilter<"ScreeningResult"> | string
    matched?: BoolFilter<"ScreeningResult"> | boolean
    details?: JsonNullableFilter<"ScreeningResult">
    createdAt?: DateTimeFilter<"ScreeningResult"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ScreeningResultOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    matched?: SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ScreeningResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScreeningResultWhereInput | ScreeningResultWhereInput[]
    OR?: ScreeningResultWhereInput[]
    NOT?: ScreeningResultWhereInput | ScreeningResultWhereInput[]
    userId?: StringFilter<"ScreeningResult"> | string
    type?: StringFilter<"ScreeningResult"> | string
    provider?: StringFilter<"ScreeningResult"> | string
    matched?: BoolFilter<"ScreeningResult"> | boolean
    details?: JsonNullableFilter<"ScreeningResult">
    createdAt?: DateTimeFilter<"ScreeningResult"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type ScreeningResultOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    matched?: SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ScreeningResultCountOrderByAggregateInput
    _max?: ScreeningResultMaxOrderByAggregateInput
    _min?: ScreeningResultMinOrderByAggregateInput
  }

  export type ScreeningResultScalarWhereWithAggregatesInput = {
    AND?: ScreeningResultScalarWhereWithAggregatesInput | ScreeningResultScalarWhereWithAggregatesInput[]
    OR?: ScreeningResultScalarWhereWithAggregatesInput[]
    NOT?: ScreeningResultScalarWhereWithAggregatesInput | ScreeningResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScreeningResult"> | string
    userId?: StringWithAggregatesFilter<"ScreeningResult"> | string
    type?: StringWithAggregatesFilter<"ScreeningResult"> | string
    provider?: StringWithAggregatesFilter<"ScreeningResult"> | string
    matched?: BoolWithAggregatesFilter<"ScreeningResult"> | boolean
    details?: JsonNullableWithAggregatesFilter<"ScreeningResult">
    createdAt?: DateTimeWithAggregatesFilter<"ScreeningResult"> | Date | string
  }

  export type KycAuditLogWhereInput = {
    AND?: KycAuditLogWhereInput | KycAuditLogWhereInput[]
    OR?: KycAuditLogWhereInput[]
    NOT?: KycAuditLogWhereInput | KycAuditLogWhereInput[]
    id?: StringFilter<"KycAuditLog"> | string
    userId?: StringFilter<"KycAuditLog"> | string
    action?: StringFilter<"KycAuditLog"> | string
    fromState?: EnumKycStatusNullableFilter<"KycAuditLog"> | $Enums.KycStatus | null
    toState?: EnumKycStatusFilter<"KycAuditLog"> | $Enums.KycStatus
    performedBy?: StringFilter<"KycAuditLog"> | string
    reason?: StringNullableFilter<"KycAuditLog"> | string | null
    createdAt?: DateTimeFilter<"KycAuditLog"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type KycAuditLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    fromState?: SortOrderInput | SortOrder
    toState?: SortOrder
    performedBy?: SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type KycAuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: KycAuditLogWhereInput | KycAuditLogWhereInput[]
    OR?: KycAuditLogWhereInput[]
    NOT?: KycAuditLogWhereInput | KycAuditLogWhereInput[]
    userId?: StringFilter<"KycAuditLog"> | string
    action?: StringFilter<"KycAuditLog"> | string
    fromState?: EnumKycStatusNullableFilter<"KycAuditLog"> | $Enums.KycStatus | null
    toState?: EnumKycStatusFilter<"KycAuditLog"> | $Enums.KycStatus
    performedBy?: StringFilter<"KycAuditLog"> | string
    reason?: StringNullableFilter<"KycAuditLog"> | string | null
    createdAt?: DateTimeFilter<"KycAuditLog"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type KycAuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    fromState?: SortOrderInput | SortOrder
    toState?: SortOrder
    performedBy?: SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: KycAuditLogCountOrderByAggregateInput
    _max?: KycAuditLogMaxOrderByAggregateInput
    _min?: KycAuditLogMinOrderByAggregateInput
  }

  export type KycAuditLogScalarWhereWithAggregatesInput = {
    AND?: KycAuditLogScalarWhereWithAggregatesInput | KycAuditLogScalarWhereWithAggregatesInput[]
    OR?: KycAuditLogScalarWhereWithAggregatesInput[]
    NOT?: KycAuditLogScalarWhereWithAggregatesInput | KycAuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"KycAuditLog"> | string
    userId?: StringWithAggregatesFilter<"KycAuditLog"> | string
    action?: StringWithAggregatesFilter<"KycAuditLog"> | string
    fromState?: EnumKycStatusNullableWithAggregatesFilter<"KycAuditLog"> | $Enums.KycStatus | null
    toState?: EnumKycStatusWithAggregatesFilter<"KycAuditLog"> | $Enums.KycStatus
    performedBy?: StringWithAggregatesFilter<"KycAuditLog"> | string
    reason?: StringNullableWithAggregatesFilter<"KycAuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"KycAuditLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    kycStatus?: $Enums.KycStatus
    kycTier?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    verifications?: KycVerificationCreateNestedManyWithoutUserInput
    screeningResults?: ScreeningResultCreateNestedManyWithoutUserInput
    auditLogs?: KycAuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    kycStatus?: $Enums.KycStatus
    kycTier?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    verifications?: KycVerificationUncheckedCreateNestedManyWithoutUserInput
    screeningResults?: ScreeningResultUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: KycAuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    kycTier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifications?: KycVerificationUpdateManyWithoutUserNestedInput
    screeningResults?: ScreeningResultUpdateManyWithoutUserNestedInput
    auditLogs?: KycAuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    kycTier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifications?: KycVerificationUncheckedUpdateManyWithoutUserNestedInput
    screeningResults?: ScreeningResultUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: KycAuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    kycStatus?: $Enums.KycStatus
    kycTier?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    kycTier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    kycTier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KycVerificationCreateInput = {
    id?: string
    documentType: string
    documentNumber: string
    documentCountry?: string | null
    documentFrontUrl?: string | null
    documentBackUrl?: string | null
    selfieUrl?: string | null
    status?: $Enums.KycStatus
    decision?: string | null
    decisionReason?: string | null
    decidedBy?: string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    pepScreened?: boolean
    sanctionScreened?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVerificationsInput
  }

  export type KycVerificationUncheckedCreateInput = {
    id?: string
    userId: string
    documentType: string
    documentNumber: string
    documentCountry?: string | null
    documentFrontUrl?: string | null
    documentBackUrl?: string | null
    selfieUrl?: string | null
    status?: $Enums.KycStatus
    decision?: string | null
    decisionReason?: string | null
    decidedBy?: string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    pepScreened?: boolean
    sanctionScreened?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KycVerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    documentNumber?: StringFieldUpdateOperationsInput | string
    documentCountry?: NullableStringFieldUpdateOperationsInput | string | null
    documentFrontUrl?: NullableStringFieldUpdateOperationsInput | string | null
    documentBackUrl?: NullableStringFieldUpdateOperationsInput | string | null
    selfieUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    decision?: NullableStringFieldUpdateOperationsInput | string | null
    decisionReason?: NullableStringFieldUpdateOperationsInput | string | null
    decidedBy?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    pepScreened?: BoolFieldUpdateOperationsInput | boolean
    sanctionScreened?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVerificationsNestedInput
  }

  export type KycVerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    documentNumber?: StringFieldUpdateOperationsInput | string
    documentCountry?: NullableStringFieldUpdateOperationsInput | string | null
    documentFrontUrl?: NullableStringFieldUpdateOperationsInput | string | null
    documentBackUrl?: NullableStringFieldUpdateOperationsInput | string | null
    selfieUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    decision?: NullableStringFieldUpdateOperationsInput | string | null
    decisionReason?: NullableStringFieldUpdateOperationsInput | string | null
    decidedBy?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    pepScreened?: BoolFieldUpdateOperationsInput | boolean
    sanctionScreened?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KycVerificationCreateManyInput = {
    id?: string
    userId: string
    documentType: string
    documentNumber: string
    documentCountry?: string | null
    documentFrontUrl?: string | null
    documentBackUrl?: string | null
    selfieUrl?: string | null
    status?: $Enums.KycStatus
    decision?: string | null
    decisionReason?: string | null
    decidedBy?: string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    pepScreened?: boolean
    sanctionScreened?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KycVerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    documentNumber?: StringFieldUpdateOperationsInput | string
    documentCountry?: NullableStringFieldUpdateOperationsInput | string | null
    documentFrontUrl?: NullableStringFieldUpdateOperationsInput | string | null
    documentBackUrl?: NullableStringFieldUpdateOperationsInput | string | null
    selfieUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    decision?: NullableStringFieldUpdateOperationsInput | string | null
    decisionReason?: NullableStringFieldUpdateOperationsInput | string | null
    decidedBy?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    pepScreened?: BoolFieldUpdateOperationsInput | boolean
    sanctionScreened?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KycVerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    documentNumber?: StringFieldUpdateOperationsInput | string
    documentCountry?: NullableStringFieldUpdateOperationsInput | string | null
    documentFrontUrl?: NullableStringFieldUpdateOperationsInput | string | null
    documentBackUrl?: NullableStringFieldUpdateOperationsInput | string | null
    selfieUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    decision?: NullableStringFieldUpdateOperationsInput | string | null
    decisionReason?: NullableStringFieldUpdateOperationsInput | string | null
    decidedBy?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    pepScreened?: BoolFieldUpdateOperationsInput | boolean
    sanctionScreened?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScreeningResultCreateInput = {
    id?: string
    type: string
    provider: string
    matched?: boolean
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutScreeningResultsInput
  }

  export type ScreeningResultUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    matched?: boolean
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ScreeningResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    matched?: BoolFieldUpdateOperationsInput | boolean
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutScreeningResultsNestedInput
  }

  export type ScreeningResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    matched?: BoolFieldUpdateOperationsInput | boolean
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScreeningResultCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    matched?: boolean
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ScreeningResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    matched?: BoolFieldUpdateOperationsInput | boolean
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScreeningResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    matched?: BoolFieldUpdateOperationsInput | boolean
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KycAuditLogCreateInput = {
    id?: string
    action: string
    fromState?: $Enums.KycStatus | null
    toState: $Enums.KycStatus
    performedBy: string
    reason?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type KycAuditLogUncheckedCreateInput = {
    id?: string
    userId: string
    action: string
    fromState?: $Enums.KycStatus | null
    toState: $Enums.KycStatus
    performedBy: string
    reason?: string | null
    createdAt?: Date | string
  }

  export type KycAuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    fromState?: NullableEnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus | null
    toState?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    performedBy?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAuditLogsNestedInput
  }

  export type KycAuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    fromState?: NullableEnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus | null
    toState?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    performedBy?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KycAuditLogCreateManyInput = {
    id?: string
    userId: string
    action: string
    fromState?: $Enums.KycStatus | null
    toState: $Enums.KycStatus
    performedBy: string
    reason?: string | null
    createdAt?: Date | string
  }

  export type KycAuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    fromState?: NullableEnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus | null
    toState?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    performedBy?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KycAuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    fromState?: NullableEnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus | null
    toState?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    performedBy?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type EnumKycStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.KycStatus | EnumKycStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKycStatusFilter<$PrismaModel> | $Enums.KycStatus
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

  export type KycVerificationListRelationFilter = {
    every?: KycVerificationWhereInput
    some?: KycVerificationWhereInput
    none?: KycVerificationWhereInput
  }

  export type ScreeningResultListRelationFilter = {
    every?: ScreeningResultWhereInput
    some?: ScreeningResultWhereInput
    none?: ScreeningResultWhereInput
  }

  export type KycAuditLogListRelationFilter = {
    every?: KycAuditLogWhereInput
    some?: KycAuditLogWhereInput
    none?: KycAuditLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type KycVerificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScreeningResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KycAuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    kycStatus?: SortOrder
    kycTier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    kycStatus?: SortOrder
    kycTier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    kycStatus?: SortOrder
    kycTier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EnumKycStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KycStatus | EnumKycStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKycStatusWithAggregatesFilter<$PrismaModel> | $Enums.KycStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKycStatusFilter<$PrismaModel>
    _max?: NestedEnumKycStatusFilter<$PrismaModel>
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
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type KycVerificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    documentType?: SortOrder
    documentNumber?: SortOrder
    documentCountry?: SortOrder
    documentFrontUrl?: SortOrder
    documentBackUrl?: SortOrder
    selfieUrl?: SortOrder
    status?: SortOrder
    decision?: SortOrder
    decisionReason?: SortOrder
    decidedBy?: SortOrder
    providerResponse?: SortOrder
    pepScreened?: SortOrder
    sanctionScreened?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KycVerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    documentType?: SortOrder
    documentNumber?: SortOrder
    documentCountry?: SortOrder
    documentFrontUrl?: SortOrder
    documentBackUrl?: SortOrder
    selfieUrl?: SortOrder
    status?: SortOrder
    decision?: SortOrder
    decisionReason?: SortOrder
    decidedBy?: SortOrder
    pepScreened?: SortOrder
    sanctionScreened?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KycVerificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    documentType?: SortOrder
    documentNumber?: SortOrder
    documentCountry?: SortOrder
    documentFrontUrl?: SortOrder
    documentBackUrl?: SortOrder
    selfieUrl?: SortOrder
    status?: SortOrder
    decision?: SortOrder
    decisionReason?: SortOrder
    decidedBy?: SortOrder
    pepScreened?: SortOrder
    sanctionScreened?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ScreeningResultCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    matched?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type ScreeningResultMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    matched?: SortOrder
    createdAt?: SortOrder
  }

  export type ScreeningResultMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    matched?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumKycStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.KycStatus | EnumKycStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumKycStatusNullableFilter<$PrismaModel> | $Enums.KycStatus | null
  }

  export type KycAuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    fromState?: SortOrder
    toState?: SortOrder
    performedBy?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type KycAuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    fromState?: SortOrder
    toState?: SortOrder
    performedBy?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type KycAuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    fromState?: SortOrder
    toState?: SortOrder
    performedBy?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumKycStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KycStatus | EnumKycStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumKycStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.KycStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumKycStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumKycStatusNullableFilter<$PrismaModel>
  }

  export type KycVerificationCreateNestedManyWithoutUserInput = {
    create?: XOR<KycVerificationCreateWithoutUserInput, KycVerificationUncheckedCreateWithoutUserInput> | KycVerificationCreateWithoutUserInput[] | KycVerificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KycVerificationCreateOrConnectWithoutUserInput | KycVerificationCreateOrConnectWithoutUserInput[]
    createMany?: KycVerificationCreateManyUserInputEnvelope
    connect?: KycVerificationWhereUniqueInput | KycVerificationWhereUniqueInput[]
  }

  export type ScreeningResultCreateNestedManyWithoutUserInput = {
    create?: XOR<ScreeningResultCreateWithoutUserInput, ScreeningResultUncheckedCreateWithoutUserInput> | ScreeningResultCreateWithoutUserInput[] | ScreeningResultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScreeningResultCreateOrConnectWithoutUserInput | ScreeningResultCreateOrConnectWithoutUserInput[]
    createMany?: ScreeningResultCreateManyUserInputEnvelope
    connect?: ScreeningResultWhereUniqueInput | ScreeningResultWhereUniqueInput[]
  }

  export type KycAuditLogCreateNestedManyWithoutUserInput = {
    create?: XOR<KycAuditLogCreateWithoutUserInput, KycAuditLogUncheckedCreateWithoutUserInput> | KycAuditLogCreateWithoutUserInput[] | KycAuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KycAuditLogCreateOrConnectWithoutUserInput | KycAuditLogCreateOrConnectWithoutUserInput[]
    createMany?: KycAuditLogCreateManyUserInputEnvelope
    connect?: KycAuditLogWhereUniqueInput | KycAuditLogWhereUniqueInput[]
  }

  export type KycVerificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<KycVerificationCreateWithoutUserInput, KycVerificationUncheckedCreateWithoutUserInput> | KycVerificationCreateWithoutUserInput[] | KycVerificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KycVerificationCreateOrConnectWithoutUserInput | KycVerificationCreateOrConnectWithoutUserInput[]
    createMany?: KycVerificationCreateManyUserInputEnvelope
    connect?: KycVerificationWhereUniqueInput | KycVerificationWhereUniqueInput[]
  }

  export type ScreeningResultUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ScreeningResultCreateWithoutUserInput, ScreeningResultUncheckedCreateWithoutUserInput> | ScreeningResultCreateWithoutUserInput[] | ScreeningResultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScreeningResultCreateOrConnectWithoutUserInput | ScreeningResultCreateOrConnectWithoutUserInput[]
    createMany?: ScreeningResultCreateManyUserInputEnvelope
    connect?: ScreeningResultWhereUniqueInput | ScreeningResultWhereUniqueInput[]
  }

  export type KycAuditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<KycAuditLogCreateWithoutUserInput, KycAuditLogUncheckedCreateWithoutUserInput> | KycAuditLogCreateWithoutUserInput[] | KycAuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KycAuditLogCreateOrConnectWithoutUserInput | KycAuditLogCreateOrConnectWithoutUserInput[]
    createMany?: KycAuditLogCreateManyUserInputEnvelope
    connect?: KycAuditLogWhereUniqueInput | KycAuditLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type EnumKycStatusFieldUpdateOperationsInput = {
    set?: $Enums.KycStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type KycVerificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<KycVerificationCreateWithoutUserInput, KycVerificationUncheckedCreateWithoutUserInput> | KycVerificationCreateWithoutUserInput[] | KycVerificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KycVerificationCreateOrConnectWithoutUserInput | KycVerificationCreateOrConnectWithoutUserInput[]
    upsert?: KycVerificationUpsertWithWhereUniqueWithoutUserInput | KycVerificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: KycVerificationCreateManyUserInputEnvelope
    set?: KycVerificationWhereUniqueInput | KycVerificationWhereUniqueInput[]
    disconnect?: KycVerificationWhereUniqueInput | KycVerificationWhereUniqueInput[]
    delete?: KycVerificationWhereUniqueInput | KycVerificationWhereUniqueInput[]
    connect?: KycVerificationWhereUniqueInput | KycVerificationWhereUniqueInput[]
    update?: KycVerificationUpdateWithWhereUniqueWithoutUserInput | KycVerificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: KycVerificationUpdateManyWithWhereWithoutUserInput | KycVerificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: KycVerificationScalarWhereInput | KycVerificationScalarWhereInput[]
  }

  export type ScreeningResultUpdateManyWithoutUserNestedInput = {
    create?: XOR<ScreeningResultCreateWithoutUserInput, ScreeningResultUncheckedCreateWithoutUserInput> | ScreeningResultCreateWithoutUserInput[] | ScreeningResultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScreeningResultCreateOrConnectWithoutUserInput | ScreeningResultCreateOrConnectWithoutUserInput[]
    upsert?: ScreeningResultUpsertWithWhereUniqueWithoutUserInput | ScreeningResultUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ScreeningResultCreateManyUserInputEnvelope
    set?: ScreeningResultWhereUniqueInput | ScreeningResultWhereUniqueInput[]
    disconnect?: ScreeningResultWhereUniqueInput | ScreeningResultWhereUniqueInput[]
    delete?: ScreeningResultWhereUniqueInput | ScreeningResultWhereUniqueInput[]
    connect?: ScreeningResultWhereUniqueInput | ScreeningResultWhereUniqueInput[]
    update?: ScreeningResultUpdateWithWhereUniqueWithoutUserInput | ScreeningResultUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ScreeningResultUpdateManyWithWhereWithoutUserInput | ScreeningResultUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ScreeningResultScalarWhereInput | ScreeningResultScalarWhereInput[]
  }

  export type KycAuditLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<KycAuditLogCreateWithoutUserInput, KycAuditLogUncheckedCreateWithoutUserInput> | KycAuditLogCreateWithoutUserInput[] | KycAuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KycAuditLogCreateOrConnectWithoutUserInput | KycAuditLogCreateOrConnectWithoutUserInput[]
    upsert?: KycAuditLogUpsertWithWhereUniqueWithoutUserInput | KycAuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: KycAuditLogCreateManyUserInputEnvelope
    set?: KycAuditLogWhereUniqueInput | KycAuditLogWhereUniqueInput[]
    disconnect?: KycAuditLogWhereUniqueInput | KycAuditLogWhereUniqueInput[]
    delete?: KycAuditLogWhereUniqueInput | KycAuditLogWhereUniqueInput[]
    connect?: KycAuditLogWhereUniqueInput | KycAuditLogWhereUniqueInput[]
    update?: KycAuditLogUpdateWithWhereUniqueWithoutUserInput | KycAuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: KycAuditLogUpdateManyWithWhereWithoutUserInput | KycAuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: KycAuditLogScalarWhereInput | KycAuditLogScalarWhereInput[]
  }

  export type KycVerificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<KycVerificationCreateWithoutUserInput, KycVerificationUncheckedCreateWithoutUserInput> | KycVerificationCreateWithoutUserInput[] | KycVerificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KycVerificationCreateOrConnectWithoutUserInput | KycVerificationCreateOrConnectWithoutUserInput[]
    upsert?: KycVerificationUpsertWithWhereUniqueWithoutUserInput | KycVerificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: KycVerificationCreateManyUserInputEnvelope
    set?: KycVerificationWhereUniqueInput | KycVerificationWhereUniqueInput[]
    disconnect?: KycVerificationWhereUniqueInput | KycVerificationWhereUniqueInput[]
    delete?: KycVerificationWhereUniqueInput | KycVerificationWhereUniqueInput[]
    connect?: KycVerificationWhereUniqueInput | KycVerificationWhereUniqueInput[]
    update?: KycVerificationUpdateWithWhereUniqueWithoutUserInput | KycVerificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: KycVerificationUpdateManyWithWhereWithoutUserInput | KycVerificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: KycVerificationScalarWhereInput | KycVerificationScalarWhereInput[]
  }

  export type ScreeningResultUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ScreeningResultCreateWithoutUserInput, ScreeningResultUncheckedCreateWithoutUserInput> | ScreeningResultCreateWithoutUserInput[] | ScreeningResultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScreeningResultCreateOrConnectWithoutUserInput | ScreeningResultCreateOrConnectWithoutUserInput[]
    upsert?: ScreeningResultUpsertWithWhereUniqueWithoutUserInput | ScreeningResultUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ScreeningResultCreateManyUserInputEnvelope
    set?: ScreeningResultWhereUniqueInput | ScreeningResultWhereUniqueInput[]
    disconnect?: ScreeningResultWhereUniqueInput | ScreeningResultWhereUniqueInput[]
    delete?: ScreeningResultWhereUniqueInput | ScreeningResultWhereUniqueInput[]
    connect?: ScreeningResultWhereUniqueInput | ScreeningResultWhereUniqueInput[]
    update?: ScreeningResultUpdateWithWhereUniqueWithoutUserInput | ScreeningResultUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ScreeningResultUpdateManyWithWhereWithoutUserInput | ScreeningResultUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ScreeningResultScalarWhereInput | ScreeningResultScalarWhereInput[]
  }

  export type KycAuditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<KycAuditLogCreateWithoutUserInput, KycAuditLogUncheckedCreateWithoutUserInput> | KycAuditLogCreateWithoutUserInput[] | KycAuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KycAuditLogCreateOrConnectWithoutUserInput | KycAuditLogCreateOrConnectWithoutUserInput[]
    upsert?: KycAuditLogUpsertWithWhereUniqueWithoutUserInput | KycAuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: KycAuditLogCreateManyUserInputEnvelope
    set?: KycAuditLogWhereUniqueInput | KycAuditLogWhereUniqueInput[]
    disconnect?: KycAuditLogWhereUniqueInput | KycAuditLogWhereUniqueInput[]
    delete?: KycAuditLogWhereUniqueInput | KycAuditLogWhereUniqueInput[]
    connect?: KycAuditLogWhereUniqueInput | KycAuditLogWhereUniqueInput[]
    update?: KycAuditLogUpdateWithWhereUniqueWithoutUserInput | KycAuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: KycAuditLogUpdateManyWithWhereWithoutUserInput | KycAuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: KycAuditLogScalarWhereInput | KycAuditLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVerificationsInput = {
    create?: XOR<UserCreateWithoutVerificationsInput, UserUncheckedCreateWithoutVerificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerificationsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutVerificationsNestedInput = {
    create?: XOR<UserCreateWithoutVerificationsInput, UserUncheckedCreateWithoutVerificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerificationsInput
    upsert?: UserUpsertWithoutVerificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVerificationsInput, UserUpdateWithoutVerificationsInput>, UserUncheckedUpdateWithoutVerificationsInput>
  }

  export type UserCreateNestedOneWithoutScreeningResultsInput = {
    create?: XOR<UserCreateWithoutScreeningResultsInput, UserUncheckedCreateWithoutScreeningResultsInput>
    connectOrCreate?: UserCreateOrConnectWithoutScreeningResultsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutScreeningResultsNestedInput = {
    create?: XOR<UserCreateWithoutScreeningResultsInput, UserUncheckedCreateWithoutScreeningResultsInput>
    connectOrCreate?: UserCreateOrConnectWithoutScreeningResultsInput
    upsert?: UserUpsertWithoutScreeningResultsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutScreeningResultsInput, UserUpdateWithoutScreeningResultsInput>, UserUncheckedUpdateWithoutScreeningResultsInput>
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableEnumKycStatusFieldUpdateOperationsInput = {
    set?: $Enums.KycStatus | null
  }

  export type UserUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumKycStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.KycStatus | EnumKycStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKycStatusFilter<$PrismaModel> | $Enums.KycStatus
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumKycStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KycStatus | EnumKycStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKycStatusWithAggregatesFilter<$PrismaModel> | $Enums.KycStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKycStatusFilter<$PrismaModel>
    _max?: NestedEnumKycStatusFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumKycStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.KycStatus | EnumKycStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumKycStatusNullableFilter<$PrismaModel> | $Enums.KycStatus | null
  }

  export type NestedEnumKycStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KycStatus | EnumKycStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumKycStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.KycStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumKycStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumKycStatusNullableFilter<$PrismaModel>
  }

  export type KycVerificationCreateWithoutUserInput = {
    id?: string
    documentType: string
    documentNumber: string
    documentCountry?: string | null
    documentFrontUrl?: string | null
    documentBackUrl?: string | null
    selfieUrl?: string | null
    status?: $Enums.KycStatus
    decision?: string | null
    decisionReason?: string | null
    decidedBy?: string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    pepScreened?: boolean
    sanctionScreened?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KycVerificationUncheckedCreateWithoutUserInput = {
    id?: string
    documentType: string
    documentNumber: string
    documentCountry?: string | null
    documentFrontUrl?: string | null
    documentBackUrl?: string | null
    selfieUrl?: string | null
    status?: $Enums.KycStatus
    decision?: string | null
    decisionReason?: string | null
    decidedBy?: string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    pepScreened?: boolean
    sanctionScreened?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KycVerificationCreateOrConnectWithoutUserInput = {
    where: KycVerificationWhereUniqueInput
    create: XOR<KycVerificationCreateWithoutUserInput, KycVerificationUncheckedCreateWithoutUserInput>
  }

  export type KycVerificationCreateManyUserInputEnvelope = {
    data: KycVerificationCreateManyUserInput | KycVerificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ScreeningResultCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    matched?: boolean
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ScreeningResultUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    matched?: boolean
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ScreeningResultCreateOrConnectWithoutUserInput = {
    where: ScreeningResultWhereUniqueInput
    create: XOR<ScreeningResultCreateWithoutUserInput, ScreeningResultUncheckedCreateWithoutUserInput>
  }

  export type ScreeningResultCreateManyUserInputEnvelope = {
    data: ScreeningResultCreateManyUserInput | ScreeningResultCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type KycAuditLogCreateWithoutUserInput = {
    id?: string
    action: string
    fromState?: $Enums.KycStatus | null
    toState: $Enums.KycStatus
    performedBy: string
    reason?: string | null
    createdAt?: Date | string
  }

  export type KycAuditLogUncheckedCreateWithoutUserInput = {
    id?: string
    action: string
    fromState?: $Enums.KycStatus | null
    toState: $Enums.KycStatus
    performedBy: string
    reason?: string | null
    createdAt?: Date | string
  }

  export type KycAuditLogCreateOrConnectWithoutUserInput = {
    where: KycAuditLogWhereUniqueInput
    create: XOR<KycAuditLogCreateWithoutUserInput, KycAuditLogUncheckedCreateWithoutUserInput>
  }

  export type KycAuditLogCreateManyUserInputEnvelope = {
    data: KycAuditLogCreateManyUserInput | KycAuditLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type KycVerificationUpsertWithWhereUniqueWithoutUserInput = {
    where: KycVerificationWhereUniqueInput
    update: XOR<KycVerificationUpdateWithoutUserInput, KycVerificationUncheckedUpdateWithoutUserInput>
    create: XOR<KycVerificationCreateWithoutUserInput, KycVerificationUncheckedCreateWithoutUserInput>
  }

  export type KycVerificationUpdateWithWhereUniqueWithoutUserInput = {
    where: KycVerificationWhereUniqueInput
    data: XOR<KycVerificationUpdateWithoutUserInput, KycVerificationUncheckedUpdateWithoutUserInput>
  }

  export type KycVerificationUpdateManyWithWhereWithoutUserInput = {
    where: KycVerificationScalarWhereInput
    data: XOR<KycVerificationUpdateManyMutationInput, KycVerificationUncheckedUpdateManyWithoutUserInput>
  }

  export type KycVerificationScalarWhereInput = {
    AND?: KycVerificationScalarWhereInput | KycVerificationScalarWhereInput[]
    OR?: KycVerificationScalarWhereInput[]
    NOT?: KycVerificationScalarWhereInput | KycVerificationScalarWhereInput[]
    id?: StringFilter<"KycVerification"> | string
    userId?: StringFilter<"KycVerification"> | string
    documentType?: StringFilter<"KycVerification"> | string
    documentNumber?: StringFilter<"KycVerification"> | string
    documentCountry?: StringNullableFilter<"KycVerification"> | string | null
    documentFrontUrl?: StringNullableFilter<"KycVerification"> | string | null
    documentBackUrl?: StringNullableFilter<"KycVerification"> | string | null
    selfieUrl?: StringNullableFilter<"KycVerification"> | string | null
    status?: EnumKycStatusFilter<"KycVerification"> | $Enums.KycStatus
    decision?: StringNullableFilter<"KycVerification"> | string | null
    decisionReason?: StringNullableFilter<"KycVerification"> | string | null
    decidedBy?: StringNullableFilter<"KycVerification"> | string | null
    providerResponse?: JsonNullableFilter<"KycVerification">
    pepScreened?: BoolFilter<"KycVerification"> | boolean
    sanctionScreened?: BoolFilter<"KycVerification"> | boolean
    createdAt?: DateTimeFilter<"KycVerification"> | Date | string
    updatedAt?: DateTimeFilter<"KycVerification"> | Date | string
  }

  export type ScreeningResultUpsertWithWhereUniqueWithoutUserInput = {
    where: ScreeningResultWhereUniqueInput
    update: XOR<ScreeningResultUpdateWithoutUserInput, ScreeningResultUncheckedUpdateWithoutUserInput>
    create: XOR<ScreeningResultCreateWithoutUserInput, ScreeningResultUncheckedCreateWithoutUserInput>
  }

  export type ScreeningResultUpdateWithWhereUniqueWithoutUserInput = {
    where: ScreeningResultWhereUniqueInput
    data: XOR<ScreeningResultUpdateWithoutUserInput, ScreeningResultUncheckedUpdateWithoutUserInput>
  }

  export type ScreeningResultUpdateManyWithWhereWithoutUserInput = {
    where: ScreeningResultScalarWhereInput
    data: XOR<ScreeningResultUpdateManyMutationInput, ScreeningResultUncheckedUpdateManyWithoutUserInput>
  }

  export type ScreeningResultScalarWhereInput = {
    AND?: ScreeningResultScalarWhereInput | ScreeningResultScalarWhereInput[]
    OR?: ScreeningResultScalarWhereInput[]
    NOT?: ScreeningResultScalarWhereInput | ScreeningResultScalarWhereInput[]
    id?: StringFilter<"ScreeningResult"> | string
    userId?: StringFilter<"ScreeningResult"> | string
    type?: StringFilter<"ScreeningResult"> | string
    provider?: StringFilter<"ScreeningResult"> | string
    matched?: BoolFilter<"ScreeningResult"> | boolean
    details?: JsonNullableFilter<"ScreeningResult">
    createdAt?: DateTimeFilter<"ScreeningResult"> | Date | string
  }

  export type KycAuditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: KycAuditLogWhereUniqueInput
    update: XOR<KycAuditLogUpdateWithoutUserInput, KycAuditLogUncheckedUpdateWithoutUserInput>
    create: XOR<KycAuditLogCreateWithoutUserInput, KycAuditLogUncheckedCreateWithoutUserInput>
  }

  export type KycAuditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: KycAuditLogWhereUniqueInput
    data: XOR<KycAuditLogUpdateWithoutUserInput, KycAuditLogUncheckedUpdateWithoutUserInput>
  }

  export type KycAuditLogUpdateManyWithWhereWithoutUserInput = {
    where: KycAuditLogScalarWhereInput
    data: XOR<KycAuditLogUpdateManyMutationInput, KycAuditLogUncheckedUpdateManyWithoutUserInput>
  }

  export type KycAuditLogScalarWhereInput = {
    AND?: KycAuditLogScalarWhereInput | KycAuditLogScalarWhereInput[]
    OR?: KycAuditLogScalarWhereInput[]
    NOT?: KycAuditLogScalarWhereInput | KycAuditLogScalarWhereInput[]
    id?: StringFilter<"KycAuditLog"> | string
    userId?: StringFilter<"KycAuditLog"> | string
    action?: StringFilter<"KycAuditLog"> | string
    fromState?: EnumKycStatusNullableFilter<"KycAuditLog"> | $Enums.KycStatus | null
    toState?: EnumKycStatusFilter<"KycAuditLog"> | $Enums.KycStatus
    performedBy?: StringFilter<"KycAuditLog"> | string
    reason?: StringNullableFilter<"KycAuditLog"> | string | null
    createdAt?: DateTimeFilter<"KycAuditLog"> | Date | string
  }

  export type UserCreateWithoutVerificationsInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    kycStatus?: $Enums.KycStatus
    kycTier?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    screeningResults?: ScreeningResultCreateNestedManyWithoutUserInput
    auditLogs?: KycAuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVerificationsInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    kycStatus?: $Enums.KycStatus
    kycTier?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    screeningResults?: ScreeningResultUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: KycAuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVerificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVerificationsInput, UserUncheckedCreateWithoutVerificationsInput>
  }

  export type UserUpsertWithoutVerificationsInput = {
    update: XOR<UserUpdateWithoutVerificationsInput, UserUncheckedUpdateWithoutVerificationsInput>
    create: XOR<UserCreateWithoutVerificationsInput, UserUncheckedCreateWithoutVerificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVerificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVerificationsInput, UserUncheckedUpdateWithoutVerificationsInput>
  }

  export type UserUpdateWithoutVerificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    kycTier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    screeningResults?: ScreeningResultUpdateManyWithoutUserNestedInput
    auditLogs?: KycAuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVerificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    kycTier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    screeningResults?: ScreeningResultUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: KycAuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutScreeningResultsInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    kycStatus?: $Enums.KycStatus
    kycTier?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    verifications?: KycVerificationCreateNestedManyWithoutUserInput
    auditLogs?: KycAuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutScreeningResultsInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    kycStatus?: $Enums.KycStatus
    kycTier?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    verifications?: KycVerificationUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: KycAuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutScreeningResultsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutScreeningResultsInput, UserUncheckedCreateWithoutScreeningResultsInput>
  }

  export type UserUpsertWithoutScreeningResultsInput = {
    update: XOR<UserUpdateWithoutScreeningResultsInput, UserUncheckedUpdateWithoutScreeningResultsInput>
    create: XOR<UserCreateWithoutScreeningResultsInput, UserUncheckedCreateWithoutScreeningResultsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutScreeningResultsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutScreeningResultsInput, UserUncheckedUpdateWithoutScreeningResultsInput>
  }

  export type UserUpdateWithoutScreeningResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    kycTier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifications?: KycVerificationUpdateManyWithoutUserNestedInput
    auditLogs?: KycAuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutScreeningResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    kycTier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifications?: KycVerificationUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: KycAuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    kycStatus?: $Enums.KycStatus
    kycTier?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    verifications?: KycVerificationCreateNestedManyWithoutUserInput
    screeningResults?: ScreeningResultCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    kycStatus?: $Enums.KycStatus
    kycTier?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    verifications?: KycVerificationUncheckedCreateNestedManyWithoutUserInput
    screeningResults?: ScreeningResultUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    kycTier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifications?: KycVerificationUpdateManyWithoutUserNestedInput
    screeningResults?: ScreeningResultUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    kycTier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifications?: KycVerificationUncheckedUpdateManyWithoutUserNestedInput
    screeningResults?: ScreeningResultUncheckedUpdateManyWithoutUserNestedInput
  }

  export type KycVerificationCreateManyUserInput = {
    id?: string
    documentType: string
    documentNumber: string
    documentCountry?: string | null
    documentFrontUrl?: string | null
    documentBackUrl?: string | null
    selfieUrl?: string | null
    status?: $Enums.KycStatus
    decision?: string | null
    decisionReason?: string | null
    decidedBy?: string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    pepScreened?: boolean
    sanctionScreened?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScreeningResultCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    matched?: boolean
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type KycAuditLogCreateManyUserInput = {
    id?: string
    action: string
    fromState?: $Enums.KycStatus | null
    toState: $Enums.KycStatus
    performedBy: string
    reason?: string | null
    createdAt?: Date | string
  }

  export type KycVerificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    documentNumber?: StringFieldUpdateOperationsInput | string
    documentCountry?: NullableStringFieldUpdateOperationsInput | string | null
    documentFrontUrl?: NullableStringFieldUpdateOperationsInput | string | null
    documentBackUrl?: NullableStringFieldUpdateOperationsInput | string | null
    selfieUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    decision?: NullableStringFieldUpdateOperationsInput | string | null
    decisionReason?: NullableStringFieldUpdateOperationsInput | string | null
    decidedBy?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    pepScreened?: BoolFieldUpdateOperationsInput | boolean
    sanctionScreened?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KycVerificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    documentNumber?: StringFieldUpdateOperationsInput | string
    documentCountry?: NullableStringFieldUpdateOperationsInput | string | null
    documentFrontUrl?: NullableStringFieldUpdateOperationsInput | string | null
    documentBackUrl?: NullableStringFieldUpdateOperationsInput | string | null
    selfieUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    decision?: NullableStringFieldUpdateOperationsInput | string | null
    decisionReason?: NullableStringFieldUpdateOperationsInput | string | null
    decidedBy?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    pepScreened?: BoolFieldUpdateOperationsInput | boolean
    sanctionScreened?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KycVerificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    documentNumber?: StringFieldUpdateOperationsInput | string
    documentCountry?: NullableStringFieldUpdateOperationsInput | string | null
    documentFrontUrl?: NullableStringFieldUpdateOperationsInput | string | null
    documentBackUrl?: NullableStringFieldUpdateOperationsInput | string | null
    selfieUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    decision?: NullableStringFieldUpdateOperationsInput | string | null
    decisionReason?: NullableStringFieldUpdateOperationsInput | string | null
    decidedBy?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    pepScreened?: BoolFieldUpdateOperationsInput | boolean
    sanctionScreened?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScreeningResultUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    matched?: BoolFieldUpdateOperationsInput | boolean
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScreeningResultUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    matched?: BoolFieldUpdateOperationsInput | boolean
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScreeningResultUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    matched?: BoolFieldUpdateOperationsInput | boolean
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KycAuditLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    fromState?: NullableEnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus | null
    toState?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    performedBy?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KycAuditLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    fromState?: NullableEnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus | null
    toState?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    performedBy?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KycAuditLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    fromState?: NullableEnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus | null
    toState?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    performedBy?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use KycVerificationDefaultArgs instead
     */
    export type KycVerificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = KycVerificationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ScreeningResultDefaultArgs instead
     */
    export type ScreeningResultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ScreeningResultDefaultArgs<ExtArgs>
    /**
     * @deprecated Use KycAuditLogDefaultArgs instead
     */
    export type KycAuditLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = KycAuditLogDefaultArgs<ExtArgs>

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