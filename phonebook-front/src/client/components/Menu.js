import React, { Component } from 'react';
import { Collapsible, CollapsibleItem, Collection, CollectionItem, Badge, Icon } from 'react-materialize';

class Menu extends Component {
    render() {
        return (
            <div>
                <Collapsible accordion defaultActiveKey={0}>
                    <CollapsibleItem header='Contatos' icon='art_track'>
                        <Collection>
                        <CollectionItem href='/'>
                            Lista de Contatos
                            <Badge> <Icon small>arrow_forward_ios</Icon> </Badge>
                        </CollectionItem>
                        <CollectionItem href='/add-contact'>
                            Adicionar Contato
                            <Badge> <Icon small>add_box</Icon> </Badge>
                        </CollectionItem>
                        <CollectionItem href='/add-message'>
                            Adicionar Mensagem
                            <Badge> <Icon small>email</Icon> </Badge>
                        </CollectionItem>
                        </Collection>
                    </CollapsibleItem>                   
                </Collapsible>
            </div>
        );
    }
}

export default Menu;