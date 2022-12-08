import React from 'react'
import { useState } from 'react'
import { Button, Form, Row, Col, Alert } from 'react-bootstrap'
import useCategorias from '../hooks/useCategorias'


const Formulario = () => {

    const {categorias} = useCategorias()
    const [busqueda, setBusqueda] = useState({
        nombre:'',
        categoria:''
    })
    const [alerta, setAlerta] = useState('')
    const handleSubmit = e =>{
        e.preventDefault()
        if (Object.values(busqueda).includes('')) {
            setAlerta('Todos los campos son obligatorios')
            return
        }
        setAlerta('0')
    }

    return (
        <Form
            onSubmit={handleSubmit}
        >
            {alerta && <Alert variant='danger' className='text-center'>{alerta}</Alert>}
            <Row>
                <Col md={6}>
                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='nombre'>Nombre bebida</Form.Label>
                        <Form.Control
                            value={busqueda.nombre}
                            onChange={e => setBusqueda({
                            ...busqueda,
                            [e.target.name]: e.target.value
                        })} id='nombre' type='text' placeholder='Ej: Tequila, Vodka y etc' name='nombre'>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='categoria' name='categoria'>Categoría bebida</Form.Label>
                        <Form.Select
                            value={busqueda.categoria}
                            onChange={e => setBusqueda({
                                ...busqueda,
                                [e.target.name]: e.target.value
                            })}
                            id='categoria'
                            name='categoria'
                            >
                            <option value="">- Selecciona Categoría -</option>
                            {categorias.map(categoria => (
                                <option
                                    key={categoria.strCategory}
                                    value={categoria.strCategory}
                                >
                                    {categoria.strCategory}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            <Row className='justify-content-end'>
                <Col md={3}>
                    <Button type='submit' variant='danger' className='text-uppercase w-100'>Buscar bebidas</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default Formulario