package app.entity;

import java.io.*;
import javax.persistence.*;
import java.util.*;
import javax.xml.bind.annotation.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonFilter;
import cronapi.rest.security.CronappSecurity;


/**
 * Classe que representa a tabela SCHEDULER2
 * @generated
 */
@Entity
@Table(name = "\"SCHEDULER2\"")
@XmlRootElement
@CronappSecurity
@JsonFilter("app.entity.Scheduler2")
public class Scheduler2 implements Serializable {

  /**
   * UID da classe, necessário na serialização
   * @generated
   */
  private static final long serialVersionUID = 1L;

  /**
   * @generated
   */
  @Id
  @Column(name = "id", nullable = false, insertable=true, updatable=true)
  private java.lang.String id = UUID.randomUUID().toString().toUpperCase();

  /**
  * @generated
  */
  @Column(name = "titulo", nullable = true, unique = false, insertable=true, updatable=true)
  
  private java.lang.String titulo;

  /**
  * @generated
  */
  @Column(name = "descricao", nullable = true, unique = false, insertable=true, updatable=true)
  
  private java.lang.String descricao;

  /**
  * @generated
  */
  @Temporal(TemporalType.TIMESTAMP)
  @Column(name = "dataInicio", nullable = true, unique = false, insertable=true, updatable=true, columnDefinition = "TIMESTAMP")
  
  private java.util.Date dataInicio;

  /**
  * @generated
  */
  @Temporal(TemporalType.TIMESTAMP)
  @Column(name = "dataFim", nullable = true, unique = false, insertable=true, updatable=true, columnDefinition = "TIMESTAMP")
  
  private java.util.Date dataFim;

  /**
  * @generated
  */
  @Column(name = "fusoInicio", nullable = true, unique = false, insertable=true, updatable=true)
  
  private java.lang.String fusoInicio;

  /**
  * @generated
  */
  @Column(name = "fusoFim", nullable = true, unique = false, insertable=true, updatable=true)
  
  private java.lang.String fusoFim;

  /**
  * @generated
  */
  @Column(name = "eventoDeDiaInteiro", nullable = true, unique = false, insertable=true, updatable=true)
  
  private java.lang.Boolean eventoDeDiaInteiro;

  /**
  * @generated
  */
  @Column(name = "regraDeRecorrencia", nullable = true, unique = false, insertable=true, updatable=true)
  
  private java.lang.String regraDeRecorrencia;

  /**
  * @generated
  */
  @Column(name = "recorrenciaId", nullable = true, unique = false, insertable=true, updatable=true)
  
  private java.lang.String recorrenciaId;

  /**
  * @generated
  */
  @Column(name = "excessaoDaRecorrencia", nullable = true, unique = false, insertable=true, updatable=true)
  
  private java.lang.String excessaoDaRecorrencia;

  /**
  * @generated
  */
  @Column(name = "contato", nullable = true, unique = false, insertable=true, updatable=true)
  
  private java.lang.String contato;

  /**
   * Construtor
   * @generated
   */
  public Scheduler2(){
  }


  /**
   * Obtém id
   * return id
   * @generated
   */
  
  public java.lang.String getId(){
    return this.id;
  }

  /**
   * Define id
   * @param id id
   * @generated
   */
  public Scheduler2 setId(java.lang.String id){
    this.id = id;
    return this;
  }

  /**
   * Obtém titulo
   * return titulo
   * @generated
   */
  
  public java.lang.String getTitulo(){
    return this.titulo;
  }

  /**
   * Define titulo
   * @param titulo titulo
   * @generated
   */
  public Scheduler2 setTitulo(java.lang.String titulo){
    this.titulo = titulo;
    return this;
  }

  /**
   * Obtém descricao
   * return descricao
   * @generated
   */
  
  public java.lang.String getDescricao(){
    return this.descricao;
  }

  /**
   * Define descricao
   * @param descricao descricao
   * @generated
   */
  public Scheduler2 setDescricao(java.lang.String descricao){
    this.descricao = descricao;
    return this;
  }

  /**
   * Obtém dataInicio
   * return dataInicio
   * @generated
   */
  
  public java.util.Date getDataInicio(){
    return this.dataInicio;
  }

  /**
   * Define dataInicio
   * @param dataInicio dataInicio
   * @generated
   */
  public Scheduler2 setDataInicio(java.util.Date dataInicio){
    this.dataInicio = dataInicio;
    return this;
  }

  /**
   * Obtém dataFim
   * return dataFim
   * @generated
   */
  
  public java.util.Date getDataFim(){
    return this.dataFim;
  }

  /**
   * Define dataFim
   * @param dataFim dataFim
   * @generated
   */
  public Scheduler2 setDataFim(java.util.Date dataFim){
    this.dataFim = dataFim;
    return this;
  }

  /**
   * Obtém fusoInicio
   * return fusoInicio
   * @generated
   */
  
  public java.lang.String getFusoInicio(){
    return this.fusoInicio;
  }

  /**
   * Define fusoInicio
   * @param fusoInicio fusoInicio
   * @generated
   */
  public Scheduler2 setFusoInicio(java.lang.String fusoInicio){
    this.fusoInicio = fusoInicio;
    return this;
  }

  /**
   * Obtém fusoFim
   * return fusoFim
   * @generated
   */
  
  public java.lang.String getFusoFim(){
    return this.fusoFim;
  }

  /**
   * Define fusoFim
   * @param fusoFim fusoFim
   * @generated
   */
  public Scheduler2 setFusoFim(java.lang.String fusoFim){
    this.fusoFim = fusoFim;
    return this;
  }

  /**
   * Obtém eventoDeDiaInteiro
   * return eventoDeDiaInteiro
   * @generated
   */
  
  public java.lang.Boolean getEventoDeDiaInteiro(){
    return this.eventoDeDiaInteiro;
  }

  /**
   * Define eventoDeDiaInteiro
   * @param eventoDeDiaInteiro eventoDeDiaInteiro
   * @generated
   */
  public Scheduler2 setEventoDeDiaInteiro(java.lang.Boolean eventoDeDiaInteiro){
    this.eventoDeDiaInteiro = eventoDeDiaInteiro;
    return this;
  }

  /**
   * Obtém regraDeRecorrencia
   * return regraDeRecorrencia
   * @generated
   */
  
  public java.lang.String getRegraDeRecorrencia(){
    return this.regraDeRecorrencia;
  }

  /**
   * Define regraDeRecorrencia
   * @param regraDeRecorrencia regraDeRecorrencia
   * @generated
   */
  public Scheduler2 setRegraDeRecorrencia(java.lang.String regraDeRecorrencia){
    this.regraDeRecorrencia = regraDeRecorrencia;
    return this;
  }

  /**
   * Obtém recorrenciaId
   * return recorrenciaId
   * @generated
   */
  
  public java.lang.String getRecorrenciaId(){
    return this.recorrenciaId;
  }

  /**
   * Define recorrenciaId
   * @param recorrenciaId recorrenciaId
   * @generated
   */
  public Scheduler2 setRecorrenciaId(java.lang.String recorrenciaId){
    this.recorrenciaId = recorrenciaId;
    return this;
  }

  /**
   * Obtém excessaoDaRecorrencia
   * return excessaoDaRecorrencia
   * @generated
   */
  
  public java.lang.String getExcessaoDaRecorrencia(){
    return this.excessaoDaRecorrencia;
  }

  /**
   * Define excessaoDaRecorrencia
   * @param excessaoDaRecorrencia excessaoDaRecorrencia
   * @generated
   */
  public Scheduler2 setExcessaoDaRecorrencia(java.lang.String excessaoDaRecorrencia){
    this.excessaoDaRecorrencia = excessaoDaRecorrencia;
    return this;
  }

  /**
   * Obtém contato
   * return contato
   * @generated
   */
  
  public java.lang.String getContato(){
    return this.contato;
  }

  /**
   * Define contato
   * @param contato contato
   * @generated
   */
  public Scheduler2 setContato(java.lang.String contato){
    this.contato = contato;
    return this;
  }

  /**
   * @generated
   */
  @Override
  public boolean equals(Object obj) {
    if (this == obj) return true;
    if (obj == null || getClass() != obj.getClass()) return false;
    Scheduler2 object = (Scheduler2)obj;
    if (id != null ? !id.equals(object.id) : object.id != null) return false;
    return true;
  }

  /**
   * @generated
   */
  @Override
  public int hashCode() {
    int result = 1;
    result = 31 * result + ((id == null) ? 0 : id.hashCode());
    return result;
  }

}
