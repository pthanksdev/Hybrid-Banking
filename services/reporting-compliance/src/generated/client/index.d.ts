
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
 * Model SuspiciousActivityReport
 * 
 */
export type SuspiciousActivityReport = $Result.DefaultSelection<Prisma.$SuspiciousActivityReportPayload>
/**
 * Model CurrencyTransactionReport
 * 
 */
export type CurrencyTransactionReport = $Result.DefaultSelection<Prisma.$CurrencyTransactionReportPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more SuspiciousActivityReports
 * const suspiciousActivityReports = await prisma.suspiciousActivityReport.findMany()
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
   * // Fetch zero or more SuspiciousActivityReports
   * const suspiciousActivityReports = await prisma.suspiciousActivityReport.findMany()
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
   * `prisma.suspiciousActivityReport`: Exposes CRUD operations for the **SuspiciousActivityReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SuspiciousActivityReports
    * const suspiciousActivityReports = await prisma.suspiciousActivityReport.findMany()
    * ```
    */
  get suspiciousActivityReport(): Prisma.SuspiciousActivityReportDelegate<ExtArgs>;

  /**
   * `prisma.currencyTransactionReport`: Exposes CRUD operations for the **CurrencyTransactionReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CurrencyTransactionReports
    * const currencyTransactionReports = await prisma.currencyTransactionReport.findMany()
    * ```
    */
  get currencyTransactionReport(): Prisma.CurrencyTransactionReportDelegate<ExtArgs>;
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
    SuspiciousActivityReport: 'SuspiciousActivityReport',
    CurrencyTransactionReport: 'CurrencyTransactionReport'
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
      modelProps: "suspiciousActivityReport" | "currencyTransactionReport"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      SuspiciousActivityReport: {
        payload: Prisma.$SuspiciousActivityReportPayload<ExtArgs>
        fields: Prisma.SuspiciousActivityReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SuspiciousActivityReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuspiciousActivityReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SuspiciousActivityReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuspiciousActivityReportPayload>
          }
          findFirst: {
            args: Prisma.SuspiciousActivityReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuspiciousActivityReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SuspiciousActivityReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuspiciousActivityReportPayload>
          }
          findMany: {
            args: Prisma.SuspiciousActivityReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuspiciousActivityReportPayload>[]
          }
          create: {
            args: Prisma.SuspiciousActivityReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuspiciousActivityReportPayload>
          }
          createMany: {
            args: Prisma.SuspiciousActivityReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SuspiciousActivityReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuspiciousActivityReportPayload>[]
          }
          delete: {
            args: Prisma.SuspiciousActivityReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuspiciousActivityReportPayload>
          }
          update: {
            args: Prisma.SuspiciousActivityReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuspiciousActivityReportPayload>
          }
          deleteMany: {
            args: Prisma.SuspiciousActivityReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SuspiciousActivityReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SuspiciousActivityReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuspiciousActivityReportPayload>
          }
          aggregate: {
            args: Prisma.SuspiciousActivityReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuspiciousActivityReport>
          }
          groupBy: {
            args: Prisma.SuspiciousActivityReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuspiciousActivityReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.SuspiciousActivityReportCountArgs<ExtArgs>
            result: $Utils.Optional<SuspiciousActivityReportCountAggregateOutputType> | number
          }
        }
      }
      CurrencyTransactionReport: {
        payload: Prisma.$CurrencyTransactionReportPayload<ExtArgs>
        fields: Prisma.CurrencyTransactionReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CurrencyTransactionReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyTransactionReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CurrencyTransactionReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyTransactionReportPayload>
          }
          findFirst: {
            args: Prisma.CurrencyTransactionReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyTransactionReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CurrencyTransactionReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyTransactionReportPayload>
          }
          findMany: {
            args: Prisma.CurrencyTransactionReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyTransactionReportPayload>[]
          }
          create: {
            args: Prisma.CurrencyTransactionReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyTransactionReportPayload>
          }
          createMany: {
            args: Prisma.CurrencyTransactionReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CurrencyTransactionReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyTransactionReportPayload>[]
          }
          delete: {
            args: Prisma.CurrencyTransactionReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyTransactionReportPayload>
          }
          update: {
            args: Prisma.CurrencyTransactionReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyTransactionReportPayload>
          }
          deleteMany: {
            args: Prisma.CurrencyTransactionReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CurrencyTransactionReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CurrencyTransactionReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyTransactionReportPayload>
          }
          aggregate: {
            args: Prisma.CurrencyTransactionReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurrencyTransactionReport>
          }
          groupBy: {
            args: Prisma.CurrencyTransactionReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<CurrencyTransactionReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.CurrencyTransactionReportCountArgs<ExtArgs>
            result: $Utils.Optional<CurrencyTransactionReportCountAggregateOutputType> | number
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
   * Model SuspiciousActivityReport
   */

  export type AggregateSuspiciousActivityReport = {
    _count: SuspiciousActivityReportCountAggregateOutputType | null
    _avg: SuspiciousActivityReportAvgAggregateOutputType | null
    _sum: SuspiciousActivityReportSumAggregateOutputType | null
    _min: SuspiciousActivityReportMinAggregateOutputType | null
    _max: SuspiciousActivityReportMaxAggregateOutputType | null
  }

  export type SuspiciousActivityReportAvgAggregateOutputType = {
    riskScore: number | null
  }

  export type SuspiciousActivityReportSumAggregateOutputType = {
    riskScore: number | null
  }

  export type SuspiciousActivityReportMinAggregateOutputType = {
    id: string | null
    userId: string | null
    narrative: string | null
    riskScore: number | null
    status: string | null
    filedAt: Date | null
    referenceNumber: string | null
    createdAt: Date | null
  }

  export type SuspiciousActivityReportMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    narrative: string | null
    riskScore: number | null
    status: string | null
    filedAt: Date | null
    referenceNumber: string | null
    createdAt: Date | null
  }

  export type SuspiciousActivityReportCountAggregateOutputType = {
    id: number
    userId: number
    narrative: number
    riskScore: number
    status: number
    filedAt: number
    referenceNumber: number
    createdAt: number
    _all: number
  }


  export type SuspiciousActivityReportAvgAggregateInputType = {
    riskScore?: true
  }

  export type SuspiciousActivityReportSumAggregateInputType = {
    riskScore?: true
  }

  export type SuspiciousActivityReportMinAggregateInputType = {
    id?: true
    userId?: true
    narrative?: true
    riskScore?: true
    status?: true
    filedAt?: true
    referenceNumber?: true
    createdAt?: true
  }

  export type SuspiciousActivityReportMaxAggregateInputType = {
    id?: true
    userId?: true
    narrative?: true
    riskScore?: true
    status?: true
    filedAt?: true
    referenceNumber?: true
    createdAt?: true
  }

  export type SuspiciousActivityReportCountAggregateInputType = {
    id?: true
    userId?: true
    narrative?: true
    riskScore?: true
    status?: true
    filedAt?: true
    referenceNumber?: true
    createdAt?: true
    _all?: true
  }

  export type SuspiciousActivityReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuspiciousActivityReport to aggregate.
     */
    where?: SuspiciousActivityReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuspiciousActivityReports to fetch.
     */
    orderBy?: SuspiciousActivityReportOrderByWithRelationInput | SuspiciousActivityReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SuspiciousActivityReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuspiciousActivityReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuspiciousActivityReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SuspiciousActivityReports
    **/
    _count?: true | SuspiciousActivityReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SuspiciousActivityReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SuspiciousActivityReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuspiciousActivityReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuspiciousActivityReportMaxAggregateInputType
  }

  export type GetSuspiciousActivityReportAggregateType<T extends SuspiciousActivityReportAggregateArgs> = {
        [P in keyof T & keyof AggregateSuspiciousActivityReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuspiciousActivityReport[P]>
      : GetScalarType<T[P], AggregateSuspiciousActivityReport[P]>
  }




  export type SuspiciousActivityReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuspiciousActivityReportWhereInput
    orderBy?: SuspiciousActivityReportOrderByWithAggregationInput | SuspiciousActivityReportOrderByWithAggregationInput[]
    by: SuspiciousActivityReportScalarFieldEnum[] | SuspiciousActivityReportScalarFieldEnum
    having?: SuspiciousActivityReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuspiciousActivityReportCountAggregateInputType | true
    _avg?: SuspiciousActivityReportAvgAggregateInputType
    _sum?: SuspiciousActivityReportSumAggregateInputType
    _min?: SuspiciousActivityReportMinAggregateInputType
    _max?: SuspiciousActivityReportMaxAggregateInputType
  }

  export type SuspiciousActivityReportGroupByOutputType = {
    id: string
    userId: string
    narrative: string
    riskScore: number
    status: string
    filedAt: Date | null
    referenceNumber: string | null
    createdAt: Date
    _count: SuspiciousActivityReportCountAggregateOutputType | null
    _avg: SuspiciousActivityReportAvgAggregateOutputType | null
    _sum: SuspiciousActivityReportSumAggregateOutputType | null
    _min: SuspiciousActivityReportMinAggregateOutputType | null
    _max: SuspiciousActivityReportMaxAggregateOutputType | null
  }

  type GetSuspiciousActivityReportGroupByPayload<T extends SuspiciousActivityReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuspiciousActivityReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuspiciousActivityReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuspiciousActivityReportGroupByOutputType[P]>
            : GetScalarType<T[P], SuspiciousActivityReportGroupByOutputType[P]>
        }
      >
    >


  export type SuspiciousActivityReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    narrative?: boolean
    riskScore?: boolean
    status?: boolean
    filedAt?: boolean
    referenceNumber?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["suspiciousActivityReport"]>

  export type SuspiciousActivityReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    narrative?: boolean
    riskScore?: boolean
    status?: boolean
    filedAt?: boolean
    referenceNumber?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["suspiciousActivityReport"]>

  export type SuspiciousActivityReportSelectScalar = {
    id?: boolean
    userId?: boolean
    narrative?: boolean
    riskScore?: boolean
    status?: boolean
    filedAt?: boolean
    referenceNumber?: boolean
    createdAt?: boolean
  }


  export type $SuspiciousActivityReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SuspiciousActivityReport"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      narrative: string
      riskScore: number
      status: string
      filedAt: Date | null
      referenceNumber: string | null
      createdAt: Date
    }, ExtArgs["result"]["suspiciousActivityReport"]>
    composites: {}
  }

  type SuspiciousActivityReportGetPayload<S extends boolean | null | undefined | SuspiciousActivityReportDefaultArgs> = $Result.GetResult<Prisma.$SuspiciousActivityReportPayload, S>

  type SuspiciousActivityReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SuspiciousActivityReportFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SuspiciousActivityReportCountAggregateInputType | true
    }

  export interface SuspiciousActivityReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SuspiciousActivityReport'], meta: { name: 'SuspiciousActivityReport' } }
    /**
     * Find zero or one SuspiciousActivityReport that matches the filter.
     * @param {SuspiciousActivityReportFindUniqueArgs} args - Arguments to find a SuspiciousActivityReport
     * @example
     * // Get one SuspiciousActivityReport
     * const suspiciousActivityReport = await prisma.suspiciousActivityReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuspiciousActivityReportFindUniqueArgs>(args: SelectSubset<T, SuspiciousActivityReportFindUniqueArgs<ExtArgs>>): Prisma__SuspiciousActivityReportClient<$Result.GetResult<Prisma.$SuspiciousActivityReportPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SuspiciousActivityReport that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SuspiciousActivityReportFindUniqueOrThrowArgs} args - Arguments to find a SuspiciousActivityReport
     * @example
     * // Get one SuspiciousActivityReport
     * const suspiciousActivityReport = await prisma.suspiciousActivityReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuspiciousActivityReportFindUniqueOrThrowArgs>(args: SelectSubset<T, SuspiciousActivityReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SuspiciousActivityReportClient<$Result.GetResult<Prisma.$SuspiciousActivityReportPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SuspiciousActivityReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuspiciousActivityReportFindFirstArgs} args - Arguments to find a SuspiciousActivityReport
     * @example
     * // Get one SuspiciousActivityReport
     * const suspiciousActivityReport = await prisma.suspiciousActivityReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuspiciousActivityReportFindFirstArgs>(args?: SelectSubset<T, SuspiciousActivityReportFindFirstArgs<ExtArgs>>): Prisma__SuspiciousActivityReportClient<$Result.GetResult<Prisma.$SuspiciousActivityReportPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SuspiciousActivityReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuspiciousActivityReportFindFirstOrThrowArgs} args - Arguments to find a SuspiciousActivityReport
     * @example
     * // Get one SuspiciousActivityReport
     * const suspiciousActivityReport = await prisma.suspiciousActivityReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuspiciousActivityReportFindFirstOrThrowArgs>(args?: SelectSubset<T, SuspiciousActivityReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__SuspiciousActivityReportClient<$Result.GetResult<Prisma.$SuspiciousActivityReportPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SuspiciousActivityReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuspiciousActivityReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SuspiciousActivityReports
     * const suspiciousActivityReports = await prisma.suspiciousActivityReport.findMany()
     * 
     * // Get first 10 SuspiciousActivityReports
     * const suspiciousActivityReports = await prisma.suspiciousActivityReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const suspiciousActivityReportWithIdOnly = await prisma.suspiciousActivityReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SuspiciousActivityReportFindManyArgs>(args?: SelectSubset<T, SuspiciousActivityReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuspiciousActivityReportPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SuspiciousActivityReport.
     * @param {SuspiciousActivityReportCreateArgs} args - Arguments to create a SuspiciousActivityReport.
     * @example
     * // Create one SuspiciousActivityReport
     * const SuspiciousActivityReport = await prisma.suspiciousActivityReport.create({
     *   data: {
     *     // ... data to create a SuspiciousActivityReport
     *   }
     * })
     * 
     */
    create<T extends SuspiciousActivityReportCreateArgs>(args: SelectSubset<T, SuspiciousActivityReportCreateArgs<ExtArgs>>): Prisma__SuspiciousActivityReportClient<$Result.GetResult<Prisma.$SuspiciousActivityReportPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SuspiciousActivityReports.
     * @param {SuspiciousActivityReportCreateManyArgs} args - Arguments to create many SuspiciousActivityReports.
     * @example
     * // Create many SuspiciousActivityReports
     * const suspiciousActivityReport = await prisma.suspiciousActivityReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SuspiciousActivityReportCreateManyArgs>(args?: SelectSubset<T, SuspiciousActivityReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SuspiciousActivityReports and returns the data saved in the database.
     * @param {SuspiciousActivityReportCreateManyAndReturnArgs} args - Arguments to create many SuspiciousActivityReports.
     * @example
     * // Create many SuspiciousActivityReports
     * const suspiciousActivityReport = await prisma.suspiciousActivityReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SuspiciousActivityReports and only return the `id`
     * const suspiciousActivityReportWithIdOnly = await prisma.suspiciousActivityReport.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SuspiciousActivityReportCreateManyAndReturnArgs>(args?: SelectSubset<T, SuspiciousActivityReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuspiciousActivityReportPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SuspiciousActivityReport.
     * @param {SuspiciousActivityReportDeleteArgs} args - Arguments to delete one SuspiciousActivityReport.
     * @example
     * // Delete one SuspiciousActivityReport
     * const SuspiciousActivityReport = await prisma.suspiciousActivityReport.delete({
     *   where: {
     *     // ... filter to delete one SuspiciousActivityReport
     *   }
     * })
     * 
     */
    delete<T extends SuspiciousActivityReportDeleteArgs>(args: SelectSubset<T, SuspiciousActivityReportDeleteArgs<ExtArgs>>): Prisma__SuspiciousActivityReportClient<$Result.GetResult<Prisma.$SuspiciousActivityReportPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SuspiciousActivityReport.
     * @param {SuspiciousActivityReportUpdateArgs} args - Arguments to update one SuspiciousActivityReport.
     * @example
     * // Update one SuspiciousActivityReport
     * const suspiciousActivityReport = await prisma.suspiciousActivityReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SuspiciousActivityReportUpdateArgs>(args: SelectSubset<T, SuspiciousActivityReportUpdateArgs<ExtArgs>>): Prisma__SuspiciousActivityReportClient<$Result.GetResult<Prisma.$SuspiciousActivityReportPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SuspiciousActivityReports.
     * @param {SuspiciousActivityReportDeleteManyArgs} args - Arguments to filter SuspiciousActivityReports to delete.
     * @example
     * // Delete a few SuspiciousActivityReports
     * const { count } = await prisma.suspiciousActivityReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SuspiciousActivityReportDeleteManyArgs>(args?: SelectSubset<T, SuspiciousActivityReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SuspiciousActivityReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuspiciousActivityReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SuspiciousActivityReports
     * const suspiciousActivityReport = await prisma.suspiciousActivityReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SuspiciousActivityReportUpdateManyArgs>(args: SelectSubset<T, SuspiciousActivityReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SuspiciousActivityReport.
     * @param {SuspiciousActivityReportUpsertArgs} args - Arguments to update or create a SuspiciousActivityReport.
     * @example
     * // Update or create a SuspiciousActivityReport
     * const suspiciousActivityReport = await prisma.suspiciousActivityReport.upsert({
     *   create: {
     *     // ... data to create a SuspiciousActivityReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SuspiciousActivityReport we want to update
     *   }
     * })
     */
    upsert<T extends SuspiciousActivityReportUpsertArgs>(args: SelectSubset<T, SuspiciousActivityReportUpsertArgs<ExtArgs>>): Prisma__SuspiciousActivityReportClient<$Result.GetResult<Prisma.$SuspiciousActivityReportPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SuspiciousActivityReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuspiciousActivityReportCountArgs} args - Arguments to filter SuspiciousActivityReports to count.
     * @example
     * // Count the number of SuspiciousActivityReports
     * const count = await prisma.suspiciousActivityReport.count({
     *   where: {
     *     // ... the filter for the SuspiciousActivityReports we want to count
     *   }
     * })
    **/
    count<T extends SuspiciousActivityReportCountArgs>(
      args?: Subset<T, SuspiciousActivityReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuspiciousActivityReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SuspiciousActivityReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuspiciousActivityReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SuspiciousActivityReportAggregateArgs>(args: Subset<T, SuspiciousActivityReportAggregateArgs>): Prisma.PrismaPromise<GetSuspiciousActivityReportAggregateType<T>>

    /**
     * Group by SuspiciousActivityReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuspiciousActivityReportGroupByArgs} args - Group by arguments.
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
      T extends SuspiciousActivityReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuspiciousActivityReportGroupByArgs['orderBy'] }
        : { orderBy?: SuspiciousActivityReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SuspiciousActivityReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuspiciousActivityReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SuspiciousActivityReport model
   */
  readonly fields: SuspiciousActivityReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SuspiciousActivityReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SuspiciousActivityReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SuspiciousActivityReport model
   */ 
  interface SuspiciousActivityReportFieldRefs {
    readonly id: FieldRef<"SuspiciousActivityReport", 'String'>
    readonly userId: FieldRef<"SuspiciousActivityReport", 'String'>
    readonly narrative: FieldRef<"SuspiciousActivityReport", 'String'>
    readonly riskScore: FieldRef<"SuspiciousActivityReport", 'Int'>
    readonly status: FieldRef<"SuspiciousActivityReport", 'String'>
    readonly filedAt: FieldRef<"SuspiciousActivityReport", 'DateTime'>
    readonly referenceNumber: FieldRef<"SuspiciousActivityReport", 'String'>
    readonly createdAt: FieldRef<"SuspiciousActivityReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SuspiciousActivityReport findUnique
   */
  export type SuspiciousActivityReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuspiciousActivityReport
     */
    select?: SuspiciousActivityReportSelect<ExtArgs> | null
    /**
     * Filter, which SuspiciousActivityReport to fetch.
     */
    where: SuspiciousActivityReportWhereUniqueInput
  }

  /**
   * SuspiciousActivityReport findUniqueOrThrow
   */
  export type SuspiciousActivityReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuspiciousActivityReport
     */
    select?: SuspiciousActivityReportSelect<ExtArgs> | null
    /**
     * Filter, which SuspiciousActivityReport to fetch.
     */
    where: SuspiciousActivityReportWhereUniqueInput
  }

  /**
   * SuspiciousActivityReport findFirst
   */
  export type SuspiciousActivityReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuspiciousActivityReport
     */
    select?: SuspiciousActivityReportSelect<ExtArgs> | null
    /**
     * Filter, which SuspiciousActivityReport to fetch.
     */
    where?: SuspiciousActivityReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuspiciousActivityReports to fetch.
     */
    orderBy?: SuspiciousActivityReportOrderByWithRelationInput | SuspiciousActivityReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuspiciousActivityReports.
     */
    cursor?: SuspiciousActivityReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuspiciousActivityReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuspiciousActivityReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuspiciousActivityReports.
     */
    distinct?: SuspiciousActivityReportScalarFieldEnum | SuspiciousActivityReportScalarFieldEnum[]
  }

  /**
   * SuspiciousActivityReport findFirstOrThrow
   */
  export type SuspiciousActivityReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuspiciousActivityReport
     */
    select?: SuspiciousActivityReportSelect<ExtArgs> | null
    /**
     * Filter, which SuspiciousActivityReport to fetch.
     */
    where?: SuspiciousActivityReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuspiciousActivityReports to fetch.
     */
    orderBy?: SuspiciousActivityReportOrderByWithRelationInput | SuspiciousActivityReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuspiciousActivityReports.
     */
    cursor?: SuspiciousActivityReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuspiciousActivityReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuspiciousActivityReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuspiciousActivityReports.
     */
    distinct?: SuspiciousActivityReportScalarFieldEnum | SuspiciousActivityReportScalarFieldEnum[]
  }

  /**
   * SuspiciousActivityReport findMany
   */
  export type SuspiciousActivityReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuspiciousActivityReport
     */
    select?: SuspiciousActivityReportSelect<ExtArgs> | null
    /**
     * Filter, which SuspiciousActivityReports to fetch.
     */
    where?: SuspiciousActivityReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuspiciousActivityReports to fetch.
     */
    orderBy?: SuspiciousActivityReportOrderByWithRelationInput | SuspiciousActivityReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SuspiciousActivityReports.
     */
    cursor?: SuspiciousActivityReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuspiciousActivityReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuspiciousActivityReports.
     */
    skip?: number
    distinct?: SuspiciousActivityReportScalarFieldEnum | SuspiciousActivityReportScalarFieldEnum[]
  }

  /**
   * SuspiciousActivityReport create
   */
  export type SuspiciousActivityReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuspiciousActivityReport
     */
    select?: SuspiciousActivityReportSelect<ExtArgs> | null
    /**
     * The data needed to create a SuspiciousActivityReport.
     */
    data: XOR<SuspiciousActivityReportCreateInput, SuspiciousActivityReportUncheckedCreateInput>
  }

  /**
   * SuspiciousActivityReport createMany
   */
  export type SuspiciousActivityReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SuspiciousActivityReports.
     */
    data: SuspiciousActivityReportCreateManyInput | SuspiciousActivityReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SuspiciousActivityReport createManyAndReturn
   */
  export type SuspiciousActivityReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuspiciousActivityReport
     */
    select?: SuspiciousActivityReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SuspiciousActivityReports.
     */
    data: SuspiciousActivityReportCreateManyInput | SuspiciousActivityReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SuspiciousActivityReport update
   */
  export type SuspiciousActivityReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuspiciousActivityReport
     */
    select?: SuspiciousActivityReportSelect<ExtArgs> | null
    /**
     * The data needed to update a SuspiciousActivityReport.
     */
    data: XOR<SuspiciousActivityReportUpdateInput, SuspiciousActivityReportUncheckedUpdateInput>
    /**
     * Choose, which SuspiciousActivityReport to update.
     */
    where: SuspiciousActivityReportWhereUniqueInput
  }

  /**
   * SuspiciousActivityReport updateMany
   */
  export type SuspiciousActivityReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SuspiciousActivityReports.
     */
    data: XOR<SuspiciousActivityReportUpdateManyMutationInput, SuspiciousActivityReportUncheckedUpdateManyInput>
    /**
     * Filter which SuspiciousActivityReports to update
     */
    where?: SuspiciousActivityReportWhereInput
  }

  /**
   * SuspiciousActivityReport upsert
   */
  export type SuspiciousActivityReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuspiciousActivityReport
     */
    select?: SuspiciousActivityReportSelect<ExtArgs> | null
    /**
     * The filter to search for the SuspiciousActivityReport to update in case it exists.
     */
    where: SuspiciousActivityReportWhereUniqueInput
    /**
     * In case the SuspiciousActivityReport found by the `where` argument doesn't exist, create a new SuspiciousActivityReport with this data.
     */
    create: XOR<SuspiciousActivityReportCreateInput, SuspiciousActivityReportUncheckedCreateInput>
    /**
     * In case the SuspiciousActivityReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SuspiciousActivityReportUpdateInput, SuspiciousActivityReportUncheckedUpdateInput>
  }

  /**
   * SuspiciousActivityReport delete
   */
  export type SuspiciousActivityReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuspiciousActivityReport
     */
    select?: SuspiciousActivityReportSelect<ExtArgs> | null
    /**
     * Filter which SuspiciousActivityReport to delete.
     */
    where: SuspiciousActivityReportWhereUniqueInput
  }

  /**
   * SuspiciousActivityReport deleteMany
   */
  export type SuspiciousActivityReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuspiciousActivityReports to delete
     */
    where?: SuspiciousActivityReportWhereInput
  }

  /**
   * SuspiciousActivityReport without action
   */
  export type SuspiciousActivityReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuspiciousActivityReport
     */
    select?: SuspiciousActivityReportSelect<ExtArgs> | null
  }


  /**
   * Model CurrencyTransactionReport
   */

  export type AggregateCurrencyTransactionReport = {
    _count: CurrencyTransactionReportCountAggregateOutputType | null
    _avg: CurrencyTransactionReportAvgAggregateOutputType | null
    _sum: CurrencyTransactionReportSumAggregateOutputType | null
    _min: CurrencyTransactionReportMinAggregateOutputType | null
    _max: CurrencyTransactionReportMaxAggregateOutputType | null
  }

  export type CurrencyTransactionReportAvgAggregateOutputType = {
    amount: number | null
  }

  export type CurrencyTransactionReportSumAggregateOutputType = {
    amount: bigint | null
  }

  export type CurrencyTransactionReportMinAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: bigint | null
    currency: string | null
    transactionType: string | null
    status: string | null
    createdAt: Date | null
  }

  export type CurrencyTransactionReportMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: bigint | null
    currency: string | null
    transactionType: string | null
    status: string | null
    createdAt: Date | null
  }

  export type CurrencyTransactionReportCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    currency: number
    transactionType: number
    status: number
    createdAt: number
    _all: number
  }


  export type CurrencyTransactionReportAvgAggregateInputType = {
    amount?: true
  }

  export type CurrencyTransactionReportSumAggregateInputType = {
    amount?: true
  }

  export type CurrencyTransactionReportMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    currency?: true
    transactionType?: true
    status?: true
    createdAt?: true
  }

  export type CurrencyTransactionReportMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    currency?: true
    transactionType?: true
    status?: true
    createdAt?: true
  }

  export type CurrencyTransactionReportCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    currency?: true
    transactionType?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type CurrencyTransactionReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CurrencyTransactionReport to aggregate.
     */
    where?: CurrencyTransactionReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurrencyTransactionReports to fetch.
     */
    orderBy?: CurrencyTransactionReportOrderByWithRelationInput | CurrencyTransactionReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CurrencyTransactionReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurrencyTransactionReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurrencyTransactionReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CurrencyTransactionReports
    **/
    _count?: true | CurrencyTransactionReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CurrencyTransactionReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CurrencyTransactionReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CurrencyTransactionReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CurrencyTransactionReportMaxAggregateInputType
  }

  export type GetCurrencyTransactionReportAggregateType<T extends CurrencyTransactionReportAggregateArgs> = {
        [P in keyof T & keyof AggregateCurrencyTransactionReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurrencyTransactionReport[P]>
      : GetScalarType<T[P], AggregateCurrencyTransactionReport[P]>
  }




  export type CurrencyTransactionReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurrencyTransactionReportWhereInput
    orderBy?: CurrencyTransactionReportOrderByWithAggregationInput | CurrencyTransactionReportOrderByWithAggregationInput[]
    by: CurrencyTransactionReportScalarFieldEnum[] | CurrencyTransactionReportScalarFieldEnum
    having?: CurrencyTransactionReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CurrencyTransactionReportCountAggregateInputType | true
    _avg?: CurrencyTransactionReportAvgAggregateInputType
    _sum?: CurrencyTransactionReportSumAggregateInputType
    _min?: CurrencyTransactionReportMinAggregateInputType
    _max?: CurrencyTransactionReportMaxAggregateInputType
  }

  export type CurrencyTransactionReportGroupByOutputType = {
    id: string
    userId: string
    amount: bigint
    currency: string
    transactionType: string
    status: string
    createdAt: Date
    _count: CurrencyTransactionReportCountAggregateOutputType | null
    _avg: CurrencyTransactionReportAvgAggregateOutputType | null
    _sum: CurrencyTransactionReportSumAggregateOutputType | null
    _min: CurrencyTransactionReportMinAggregateOutputType | null
    _max: CurrencyTransactionReportMaxAggregateOutputType | null
  }

  type GetCurrencyTransactionReportGroupByPayload<T extends CurrencyTransactionReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CurrencyTransactionReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CurrencyTransactionReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CurrencyTransactionReportGroupByOutputType[P]>
            : GetScalarType<T[P], CurrencyTransactionReportGroupByOutputType[P]>
        }
      >
    >


  export type CurrencyTransactionReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    currency?: boolean
    transactionType?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["currencyTransactionReport"]>

  export type CurrencyTransactionReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    currency?: boolean
    transactionType?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["currencyTransactionReport"]>

  export type CurrencyTransactionReportSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    currency?: boolean
    transactionType?: boolean
    status?: boolean
    createdAt?: boolean
  }


  export type $CurrencyTransactionReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CurrencyTransactionReport"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      amount: bigint
      currency: string
      transactionType: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["currencyTransactionReport"]>
    composites: {}
  }

  type CurrencyTransactionReportGetPayload<S extends boolean | null | undefined | CurrencyTransactionReportDefaultArgs> = $Result.GetResult<Prisma.$CurrencyTransactionReportPayload, S>

  type CurrencyTransactionReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CurrencyTransactionReportFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CurrencyTransactionReportCountAggregateInputType | true
    }

  export interface CurrencyTransactionReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CurrencyTransactionReport'], meta: { name: 'CurrencyTransactionReport' } }
    /**
     * Find zero or one CurrencyTransactionReport that matches the filter.
     * @param {CurrencyTransactionReportFindUniqueArgs} args - Arguments to find a CurrencyTransactionReport
     * @example
     * // Get one CurrencyTransactionReport
     * const currencyTransactionReport = await prisma.currencyTransactionReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CurrencyTransactionReportFindUniqueArgs>(args: SelectSubset<T, CurrencyTransactionReportFindUniqueArgs<ExtArgs>>): Prisma__CurrencyTransactionReportClient<$Result.GetResult<Prisma.$CurrencyTransactionReportPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CurrencyTransactionReport that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CurrencyTransactionReportFindUniqueOrThrowArgs} args - Arguments to find a CurrencyTransactionReport
     * @example
     * // Get one CurrencyTransactionReport
     * const currencyTransactionReport = await prisma.currencyTransactionReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CurrencyTransactionReportFindUniqueOrThrowArgs>(args: SelectSubset<T, CurrencyTransactionReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CurrencyTransactionReportClient<$Result.GetResult<Prisma.$CurrencyTransactionReportPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CurrencyTransactionReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyTransactionReportFindFirstArgs} args - Arguments to find a CurrencyTransactionReport
     * @example
     * // Get one CurrencyTransactionReport
     * const currencyTransactionReport = await prisma.currencyTransactionReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CurrencyTransactionReportFindFirstArgs>(args?: SelectSubset<T, CurrencyTransactionReportFindFirstArgs<ExtArgs>>): Prisma__CurrencyTransactionReportClient<$Result.GetResult<Prisma.$CurrencyTransactionReportPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CurrencyTransactionReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyTransactionReportFindFirstOrThrowArgs} args - Arguments to find a CurrencyTransactionReport
     * @example
     * // Get one CurrencyTransactionReport
     * const currencyTransactionReport = await prisma.currencyTransactionReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CurrencyTransactionReportFindFirstOrThrowArgs>(args?: SelectSubset<T, CurrencyTransactionReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__CurrencyTransactionReportClient<$Result.GetResult<Prisma.$CurrencyTransactionReportPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CurrencyTransactionReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyTransactionReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CurrencyTransactionReports
     * const currencyTransactionReports = await prisma.currencyTransactionReport.findMany()
     * 
     * // Get first 10 CurrencyTransactionReports
     * const currencyTransactionReports = await prisma.currencyTransactionReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const currencyTransactionReportWithIdOnly = await prisma.currencyTransactionReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CurrencyTransactionReportFindManyArgs>(args?: SelectSubset<T, CurrencyTransactionReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrencyTransactionReportPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CurrencyTransactionReport.
     * @param {CurrencyTransactionReportCreateArgs} args - Arguments to create a CurrencyTransactionReport.
     * @example
     * // Create one CurrencyTransactionReport
     * const CurrencyTransactionReport = await prisma.currencyTransactionReport.create({
     *   data: {
     *     // ... data to create a CurrencyTransactionReport
     *   }
     * })
     * 
     */
    create<T extends CurrencyTransactionReportCreateArgs>(args: SelectSubset<T, CurrencyTransactionReportCreateArgs<ExtArgs>>): Prisma__CurrencyTransactionReportClient<$Result.GetResult<Prisma.$CurrencyTransactionReportPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CurrencyTransactionReports.
     * @param {CurrencyTransactionReportCreateManyArgs} args - Arguments to create many CurrencyTransactionReports.
     * @example
     * // Create many CurrencyTransactionReports
     * const currencyTransactionReport = await prisma.currencyTransactionReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CurrencyTransactionReportCreateManyArgs>(args?: SelectSubset<T, CurrencyTransactionReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CurrencyTransactionReports and returns the data saved in the database.
     * @param {CurrencyTransactionReportCreateManyAndReturnArgs} args - Arguments to create many CurrencyTransactionReports.
     * @example
     * // Create many CurrencyTransactionReports
     * const currencyTransactionReport = await prisma.currencyTransactionReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CurrencyTransactionReports and only return the `id`
     * const currencyTransactionReportWithIdOnly = await prisma.currencyTransactionReport.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CurrencyTransactionReportCreateManyAndReturnArgs>(args?: SelectSubset<T, CurrencyTransactionReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrencyTransactionReportPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CurrencyTransactionReport.
     * @param {CurrencyTransactionReportDeleteArgs} args - Arguments to delete one CurrencyTransactionReport.
     * @example
     * // Delete one CurrencyTransactionReport
     * const CurrencyTransactionReport = await prisma.currencyTransactionReport.delete({
     *   where: {
     *     // ... filter to delete one CurrencyTransactionReport
     *   }
     * })
     * 
     */
    delete<T extends CurrencyTransactionReportDeleteArgs>(args: SelectSubset<T, CurrencyTransactionReportDeleteArgs<ExtArgs>>): Prisma__CurrencyTransactionReportClient<$Result.GetResult<Prisma.$CurrencyTransactionReportPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CurrencyTransactionReport.
     * @param {CurrencyTransactionReportUpdateArgs} args - Arguments to update one CurrencyTransactionReport.
     * @example
     * // Update one CurrencyTransactionReport
     * const currencyTransactionReport = await prisma.currencyTransactionReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CurrencyTransactionReportUpdateArgs>(args: SelectSubset<T, CurrencyTransactionReportUpdateArgs<ExtArgs>>): Prisma__CurrencyTransactionReportClient<$Result.GetResult<Prisma.$CurrencyTransactionReportPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CurrencyTransactionReports.
     * @param {CurrencyTransactionReportDeleteManyArgs} args - Arguments to filter CurrencyTransactionReports to delete.
     * @example
     * // Delete a few CurrencyTransactionReports
     * const { count } = await prisma.currencyTransactionReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CurrencyTransactionReportDeleteManyArgs>(args?: SelectSubset<T, CurrencyTransactionReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CurrencyTransactionReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyTransactionReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CurrencyTransactionReports
     * const currencyTransactionReport = await prisma.currencyTransactionReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CurrencyTransactionReportUpdateManyArgs>(args: SelectSubset<T, CurrencyTransactionReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CurrencyTransactionReport.
     * @param {CurrencyTransactionReportUpsertArgs} args - Arguments to update or create a CurrencyTransactionReport.
     * @example
     * // Update or create a CurrencyTransactionReport
     * const currencyTransactionReport = await prisma.currencyTransactionReport.upsert({
     *   create: {
     *     // ... data to create a CurrencyTransactionReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CurrencyTransactionReport we want to update
     *   }
     * })
     */
    upsert<T extends CurrencyTransactionReportUpsertArgs>(args: SelectSubset<T, CurrencyTransactionReportUpsertArgs<ExtArgs>>): Prisma__CurrencyTransactionReportClient<$Result.GetResult<Prisma.$CurrencyTransactionReportPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CurrencyTransactionReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyTransactionReportCountArgs} args - Arguments to filter CurrencyTransactionReports to count.
     * @example
     * // Count the number of CurrencyTransactionReports
     * const count = await prisma.currencyTransactionReport.count({
     *   where: {
     *     // ... the filter for the CurrencyTransactionReports we want to count
     *   }
     * })
    **/
    count<T extends CurrencyTransactionReportCountArgs>(
      args?: Subset<T, CurrencyTransactionReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CurrencyTransactionReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CurrencyTransactionReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyTransactionReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CurrencyTransactionReportAggregateArgs>(args: Subset<T, CurrencyTransactionReportAggregateArgs>): Prisma.PrismaPromise<GetCurrencyTransactionReportAggregateType<T>>

    /**
     * Group by CurrencyTransactionReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyTransactionReportGroupByArgs} args - Group by arguments.
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
      T extends CurrencyTransactionReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CurrencyTransactionReportGroupByArgs['orderBy'] }
        : { orderBy?: CurrencyTransactionReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CurrencyTransactionReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCurrencyTransactionReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CurrencyTransactionReport model
   */
  readonly fields: CurrencyTransactionReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CurrencyTransactionReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CurrencyTransactionReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CurrencyTransactionReport model
   */ 
  interface CurrencyTransactionReportFieldRefs {
    readonly id: FieldRef<"CurrencyTransactionReport", 'String'>
    readonly userId: FieldRef<"CurrencyTransactionReport", 'String'>
    readonly amount: FieldRef<"CurrencyTransactionReport", 'BigInt'>
    readonly currency: FieldRef<"CurrencyTransactionReport", 'String'>
    readonly transactionType: FieldRef<"CurrencyTransactionReport", 'String'>
    readonly status: FieldRef<"CurrencyTransactionReport", 'String'>
    readonly createdAt: FieldRef<"CurrencyTransactionReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CurrencyTransactionReport findUnique
   */
  export type CurrencyTransactionReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyTransactionReport
     */
    select?: CurrencyTransactionReportSelect<ExtArgs> | null
    /**
     * Filter, which CurrencyTransactionReport to fetch.
     */
    where: CurrencyTransactionReportWhereUniqueInput
  }

  /**
   * CurrencyTransactionReport findUniqueOrThrow
   */
  export type CurrencyTransactionReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyTransactionReport
     */
    select?: CurrencyTransactionReportSelect<ExtArgs> | null
    /**
     * Filter, which CurrencyTransactionReport to fetch.
     */
    where: CurrencyTransactionReportWhereUniqueInput
  }

  /**
   * CurrencyTransactionReport findFirst
   */
  export type CurrencyTransactionReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyTransactionReport
     */
    select?: CurrencyTransactionReportSelect<ExtArgs> | null
    /**
     * Filter, which CurrencyTransactionReport to fetch.
     */
    where?: CurrencyTransactionReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurrencyTransactionReports to fetch.
     */
    orderBy?: CurrencyTransactionReportOrderByWithRelationInput | CurrencyTransactionReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CurrencyTransactionReports.
     */
    cursor?: CurrencyTransactionReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurrencyTransactionReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurrencyTransactionReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CurrencyTransactionReports.
     */
    distinct?: CurrencyTransactionReportScalarFieldEnum | CurrencyTransactionReportScalarFieldEnum[]
  }

  /**
   * CurrencyTransactionReport findFirstOrThrow
   */
  export type CurrencyTransactionReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyTransactionReport
     */
    select?: CurrencyTransactionReportSelect<ExtArgs> | null
    /**
     * Filter, which CurrencyTransactionReport to fetch.
     */
    where?: CurrencyTransactionReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurrencyTransactionReports to fetch.
     */
    orderBy?: CurrencyTransactionReportOrderByWithRelationInput | CurrencyTransactionReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CurrencyTransactionReports.
     */
    cursor?: CurrencyTransactionReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurrencyTransactionReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurrencyTransactionReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CurrencyTransactionReports.
     */
    distinct?: CurrencyTransactionReportScalarFieldEnum | CurrencyTransactionReportScalarFieldEnum[]
  }

  /**
   * CurrencyTransactionReport findMany
   */
  export type CurrencyTransactionReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyTransactionReport
     */
    select?: CurrencyTransactionReportSelect<ExtArgs> | null
    /**
     * Filter, which CurrencyTransactionReports to fetch.
     */
    where?: CurrencyTransactionReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurrencyTransactionReports to fetch.
     */
    orderBy?: CurrencyTransactionReportOrderByWithRelationInput | CurrencyTransactionReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CurrencyTransactionReports.
     */
    cursor?: CurrencyTransactionReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurrencyTransactionReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurrencyTransactionReports.
     */
    skip?: number
    distinct?: CurrencyTransactionReportScalarFieldEnum | CurrencyTransactionReportScalarFieldEnum[]
  }

  /**
   * CurrencyTransactionReport create
   */
  export type CurrencyTransactionReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyTransactionReport
     */
    select?: CurrencyTransactionReportSelect<ExtArgs> | null
    /**
     * The data needed to create a CurrencyTransactionReport.
     */
    data: XOR<CurrencyTransactionReportCreateInput, CurrencyTransactionReportUncheckedCreateInput>
  }

  /**
   * CurrencyTransactionReport createMany
   */
  export type CurrencyTransactionReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CurrencyTransactionReports.
     */
    data: CurrencyTransactionReportCreateManyInput | CurrencyTransactionReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CurrencyTransactionReport createManyAndReturn
   */
  export type CurrencyTransactionReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyTransactionReport
     */
    select?: CurrencyTransactionReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CurrencyTransactionReports.
     */
    data: CurrencyTransactionReportCreateManyInput | CurrencyTransactionReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CurrencyTransactionReport update
   */
  export type CurrencyTransactionReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyTransactionReport
     */
    select?: CurrencyTransactionReportSelect<ExtArgs> | null
    /**
     * The data needed to update a CurrencyTransactionReport.
     */
    data: XOR<CurrencyTransactionReportUpdateInput, CurrencyTransactionReportUncheckedUpdateInput>
    /**
     * Choose, which CurrencyTransactionReport to update.
     */
    where: CurrencyTransactionReportWhereUniqueInput
  }

  /**
   * CurrencyTransactionReport updateMany
   */
  export type CurrencyTransactionReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CurrencyTransactionReports.
     */
    data: XOR<CurrencyTransactionReportUpdateManyMutationInput, CurrencyTransactionReportUncheckedUpdateManyInput>
    /**
     * Filter which CurrencyTransactionReports to update
     */
    where?: CurrencyTransactionReportWhereInput
  }

  /**
   * CurrencyTransactionReport upsert
   */
  export type CurrencyTransactionReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyTransactionReport
     */
    select?: CurrencyTransactionReportSelect<ExtArgs> | null
    /**
     * The filter to search for the CurrencyTransactionReport to update in case it exists.
     */
    where: CurrencyTransactionReportWhereUniqueInput
    /**
     * In case the CurrencyTransactionReport found by the `where` argument doesn't exist, create a new CurrencyTransactionReport with this data.
     */
    create: XOR<CurrencyTransactionReportCreateInput, CurrencyTransactionReportUncheckedCreateInput>
    /**
     * In case the CurrencyTransactionReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CurrencyTransactionReportUpdateInput, CurrencyTransactionReportUncheckedUpdateInput>
  }

  /**
   * CurrencyTransactionReport delete
   */
  export type CurrencyTransactionReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyTransactionReport
     */
    select?: CurrencyTransactionReportSelect<ExtArgs> | null
    /**
     * Filter which CurrencyTransactionReport to delete.
     */
    where: CurrencyTransactionReportWhereUniqueInput
  }

  /**
   * CurrencyTransactionReport deleteMany
   */
  export type CurrencyTransactionReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CurrencyTransactionReports to delete
     */
    where?: CurrencyTransactionReportWhereInput
  }

  /**
   * CurrencyTransactionReport without action
   */
  export type CurrencyTransactionReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyTransactionReport
     */
    select?: CurrencyTransactionReportSelect<ExtArgs> | null
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


  export const SuspiciousActivityReportScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    narrative: 'narrative',
    riskScore: 'riskScore',
    status: 'status',
    filedAt: 'filedAt',
    referenceNumber: 'referenceNumber',
    createdAt: 'createdAt'
  };

  export type SuspiciousActivityReportScalarFieldEnum = (typeof SuspiciousActivityReportScalarFieldEnum)[keyof typeof SuspiciousActivityReportScalarFieldEnum]


  export const CurrencyTransactionReportScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    currency: 'currency',
    transactionType: 'transactionType',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type CurrencyTransactionReportScalarFieldEnum = (typeof CurrencyTransactionReportScalarFieldEnum)[keyof typeof CurrencyTransactionReportScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type SuspiciousActivityReportWhereInput = {
    AND?: SuspiciousActivityReportWhereInput | SuspiciousActivityReportWhereInput[]
    OR?: SuspiciousActivityReportWhereInput[]
    NOT?: SuspiciousActivityReportWhereInput | SuspiciousActivityReportWhereInput[]
    id?: StringFilter<"SuspiciousActivityReport"> | string
    userId?: StringFilter<"SuspiciousActivityReport"> | string
    narrative?: StringFilter<"SuspiciousActivityReport"> | string
    riskScore?: IntFilter<"SuspiciousActivityReport"> | number
    status?: StringFilter<"SuspiciousActivityReport"> | string
    filedAt?: DateTimeNullableFilter<"SuspiciousActivityReport"> | Date | string | null
    referenceNumber?: StringNullableFilter<"SuspiciousActivityReport"> | string | null
    createdAt?: DateTimeFilter<"SuspiciousActivityReport"> | Date | string
  }

  export type SuspiciousActivityReportOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    narrative?: SortOrder
    riskScore?: SortOrder
    status?: SortOrder
    filedAt?: SortOrderInput | SortOrder
    referenceNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type SuspiciousActivityReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SuspiciousActivityReportWhereInput | SuspiciousActivityReportWhereInput[]
    OR?: SuspiciousActivityReportWhereInput[]
    NOT?: SuspiciousActivityReportWhereInput | SuspiciousActivityReportWhereInput[]
    userId?: StringFilter<"SuspiciousActivityReport"> | string
    narrative?: StringFilter<"SuspiciousActivityReport"> | string
    riskScore?: IntFilter<"SuspiciousActivityReport"> | number
    status?: StringFilter<"SuspiciousActivityReport"> | string
    filedAt?: DateTimeNullableFilter<"SuspiciousActivityReport"> | Date | string | null
    referenceNumber?: StringNullableFilter<"SuspiciousActivityReport"> | string | null
    createdAt?: DateTimeFilter<"SuspiciousActivityReport"> | Date | string
  }, "id">

  export type SuspiciousActivityReportOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    narrative?: SortOrder
    riskScore?: SortOrder
    status?: SortOrder
    filedAt?: SortOrderInput | SortOrder
    referenceNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SuspiciousActivityReportCountOrderByAggregateInput
    _avg?: SuspiciousActivityReportAvgOrderByAggregateInput
    _max?: SuspiciousActivityReportMaxOrderByAggregateInput
    _min?: SuspiciousActivityReportMinOrderByAggregateInput
    _sum?: SuspiciousActivityReportSumOrderByAggregateInput
  }

  export type SuspiciousActivityReportScalarWhereWithAggregatesInput = {
    AND?: SuspiciousActivityReportScalarWhereWithAggregatesInput | SuspiciousActivityReportScalarWhereWithAggregatesInput[]
    OR?: SuspiciousActivityReportScalarWhereWithAggregatesInput[]
    NOT?: SuspiciousActivityReportScalarWhereWithAggregatesInput | SuspiciousActivityReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SuspiciousActivityReport"> | string
    userId?: StringWithAggregatesFilter<"SuspiciousActivityReport"> | string
    narrative?: StringWithAggregatesFilter<"SuspiciousActivityReport"> | string
    riskScore?: IntWithAggregatesFilter<"SuspiciousActivityReport"> | number
    status?: StringWithAggregatesFilter<"SuspiciousActivityReport"> | string
    filedAt?: DateTimeNullableWithAggregatesFilter<"SuspiciousActivityReport"> | Date | string | null
    referenceNumber?: StringNullableWithAggregatesFilter<"SuspiciousActivityReport"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SuspiciousActivityReport"> | Date | string
  }

  export type CurrencyTransactionReportWhereInput = {
    AND?: CurrencyTransactionReportWhereInput | CurrencyTransactionReportWhereInput[]
    OR?: CurrencyTransactionReportWhereInput[]
    NOT?: CurrencyTransactionReportWhereInput | CurrencyTransactionReportWhereInput[]
    id?: StringFilter<"CurrencyTransactionReport"> | string
    userId?: StringFilter<"CurrencyTransactionReport"> | string
    amount?: BigIntFilter<"CurrencyTransactionReport"> | bigint | number
    currency?: StringFilter<"CurrencyTransactionReport"> | string
    transactionType?: StringFilter<"CurrencyTransactionReport"> | string
    status?: StringFilter<"CurrencyTransactionReport"> | string
    createdAt?: DateTimeFilter<"CurrencyTransactionReport"> | Date | string
  }

  export type CurrencyTransactionReportOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    transactionType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type CurrencyTransactionReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CurrencyTransactionReportWhereInput | CurrencyTransactionReportWhereInput[]
    OR?: CurrencyTransactionReportWhereInput[]
    NOT?: CurrencyTransactionReportWhereInput | CurrencyTransactionReportWhereInput[]
    userId?: StringFilter<"CurrencyTransactionReport"> | string
    amount?: BigIntFilter<"CurrencyTransactionReport"> | bigint | number
    currency?: StringFilter<"CurrencyTransactionReport"> | string
    transactionType?: StringFilter<"CurrencyTransactionReport"> | string
    status?: StringFilter<"CurrencyTransactionReport"> | string
    createdAt?: DateTimeFilter<"CurrencyTransactionReport"> | Date | string
  }, "id">

  export type CurrencyTransactionReportOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    transactionType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: CurrencyTransactionReportCountOrderByAggregateInput
    _avg?: CurrencyTransactionReportAvgOrderByAggregateInput
    _max?: CurrencyTransactionReportMaxOrderByAggregateInput
    _min?: CurrencyTransactionReportMinOrderByAggregateInput
    _sum?: CurrencyTransactionReportSumOrderByAggregateInput
  }

  export type CurrencyTransactionReportScalarWhereWithAggregatesInput = {
    AND?: CurrencyTransactionReportScalarWhereWithAggregatesInput | CurrencyTransactionReportScalarWhereWithAggregatesInput[]
    OR?: CurrencyTransactionReportScalarWhereWithAggregatesInput[]
    NOT?: CurrencyTransactionReportScalarWhereWithAggregatesInput | CurrencyTransactionReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CurrencyTransactionReport"> | string
    userId?: StringWithAggregatesFilter<"CurrencyTransactionReport"> | string
    amount?: BigIntWithAggregatesFilter<"CurrencyTransactionReport"> | bigint | number
    currency?: StringWithAggregatesFilter<"CurrencyTransactionReport"> | string
    transactionType?: StringWithAggregatesFilter<"CurrencyTransactionReport"> | string
    status?: StringWithAggregatesFilter<"CurrencyTransactionReport"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CurrencyTransactionReport"> | Date | string
  }

  export type SuspiciousActivityReportCreateInput = {
    id?: string
    userId: string
    narrative: string
    riskScore: number
    status: string
    filedAt?: Date | string | null
    referenceNumber?: string | null
    createdAt?: Date | string
  }

  export type SuspiciousActivityReportUncheckedCreateInput = {
    id?: string
    userId: string
    narrative: string
    riskScore: number
    status: string
    filedAt?: Date | string | null
    referenceNumber?: string | null
    createdAt?: Date | string
  }

  export type SuspiciousActivityReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    narrative?: StringFieldUpdateOperationsInput | string
    riskScore?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    filedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuspiciousActivityReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    narrative?: StringFieldUpdateOperationsInput | string
    riskScore?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    filedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuspiciousActivityReportCreateManyInput = {
    id?: string
    userId: string
    narrative: string
    riskScore: number
    status: string
    filedAt?: Date | string | null
    referenceNumber?: string | null
    createdAt?: Date | string
  }

  export type SuspiciousActivityReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    narrative?: StringFieldUpdateOperationsInput | string
    riskScore?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    filedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuspiciousActivityReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    narrative?: StringFieldUpdateOperationsInput | string
    riskScore?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    filedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurrencyTransactionReportCreateInput = {
    id?: string
    userId: string
    amount: bigint | number
    currency: string
    transactionType: string
    status: string
    createdAt?: Date | string
  }

  export type CurrencyTransactionReportUncheckedCreateInput = {
    id?: string
    userId: string
    amount: bigint | number
    currency: string
    transactionType: string
    status: string
    createdAt?: Date | string
  }

  export type CurrencyTransactionReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    currency?: StringFieldUpdateOperationsInput | string
    transactionType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurrencyTransactionReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    currency?: StringFieldUpdateOperationsInput | string
    transactionType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurrencyTransactionReportCreateManyInput = {
    id?: string
    userId: string
    amount: bigint | number
    currency: string
    transactionType: string
    status: string
    createdAt?: Date | string
  }

  export type CurrencyTransactionReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    currency?: StringFieldUpdateOperationsInput | string
    transactionType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurrencyTransactionReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    currency?: StringFieldUpdateOperationsInput | string
    transactionType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SuspiciousActivityReportCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    narrative?: SortOrder
    riskScore?: SortOrder
    status?: SortOrder
    filedAt?: SortOrder
    referenceNumber?: SortOrder
    createdAt?: SortOrder
  }

  export type SuspiciousActivityReportAvgOrderByAggregateInput = {
    riskScore?: SortOrder
  }

  export type SuspiciousActivityReportMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    narrative?: SortOrder
    riskScore?: SortOrder
    status?: SortOrder
    filedAt?: SortOrder
    referenceNumber?: SortOrder
    createdAt?: SortOrder
  }

  export type SuspiciousActivityReportMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    narrative?: SortOrder
    riskScore?: SortOrder
    status?: SortOrder
    filedAt?: SortOrder
    referenceNumber?: SortOrder
    createdAt?: SortOrder
  }

  export type SuspiciousActivityReportSumOrderByAggregateInput = {
    riskScore?: SortOrder
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

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type CurrencyTransactionReportCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    transactionType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type CurrencyTransactionReportAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type CurrencyTransactionReportMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    transactionType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type CurrencyTransactionReportMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    transactionType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type CurrencyTransactionReportSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use SuspiciousActivityReportDefaultArgs instead
     */
    export type SuspiciousActivityReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SuspiciousActivityReportDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CurrencyTransactionReportDefaultArgs instead
     */
    export type CurrencyTransactionReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CurrencyTransactionReportDefaultArgs<ExtArgs>

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