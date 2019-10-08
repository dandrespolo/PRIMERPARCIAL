import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Liquidacion } from './liquidacion';
@Injectable({
  providedIn: 'root'
})
export class DataLiquidacionService {

  private liquidacionUrl = 'api/liquidaciones';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  addLiquidacion(liquidacion: Liquidacion): Observable<Liquidacion> {
    return this.http.post<Liquidacion>(this.liquidacionUrl, liquidacion, this.httpOptions).pipe(
      tap((newLiquidacion: Liquidacion) => this.log(`added liquidacion w/ id=${newLiquidacion.idMatricula}`)),
      catchError(this.handleError<Liquidacion>('addLiquidacion'))
    );
  }

  getLiquidaciones (): Observable<Liquidacion[]> {
    return this.http.get<Liquidacion[]>(this.liquidacionUrl)
      .pipe(
        tap(_ => this.log('fetched liquidacion')),
        catchError(this.handleError<Liquidacion[]>('getLiquidaciones', []))
      );
  }
  getLiquidacionNo404<Data>(id: number): Observable<Liquidacion> {
    const url = `${this.liquidacionUrl}/?id=${id}`; 
    return this.http.get<Liquidacion[]>(url)
      .pipe(
        map(liquidaciones => liquidaciones[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} Liquidacion id=${id}`);
        }),
        catchError(this.handleError<Liquidacion>(`getLiqui id=${id}`))
      );
  }
  /**obtener liquidacion por el id. Will 404 if id not found */
  getLiquidacion(id: number): Observable<Liquidacion> {
    const url = `${this.liquidacionUrl}/${id}`;
    return this.http.get<Liquidacion>(url).pipe(
      tap(_ => this.log(`fetched liquidacion id=${id}`)),
      catchError(this.handleError<Liquidacion>(`getLiquidacion id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /*Log a Liquidacion Service mostrara un mensaje de error */
  private log(message: string) {
    alert(`LiquidacionService: ${message}`);
  }
}
